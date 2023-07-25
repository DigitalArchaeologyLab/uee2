import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Timemap.css";
import MapContainer from "../../components/Map/MapContainer";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MapSidebar from "../../components/MapSidebar/MapSidebar";

import { filterActivitiesByTime } from "../../utils/filterActivitiesByTime";
import { filterArticlesByActivityType } from "../../utils/filterArticlesByActivityType";
import { filterActivitiesByType } from "../../utils/filterActivitiesByType";
import { updateTimeBySelectedPeriod } from "../../utils/updateTimeBySelectedPeriod";

function Timemap() {
  const [SelectedPeriod, setSelectedPeriod] = useState(["All"]);
  const [SelectedPeriodNode, setSelectedPeriodNode] = useState(0);
  const [Periods, setPeriods] = useState([
    {
      id: 0,
      name_eng: "",
      altnames_eng: null,
      name_ar: "",
      altnames_ar: null,
      start: 0,
      end: 0,
      depth: 0,
      path: "",
      numchild: 0,
    },
  ]);
  const [LoadingPeriods, setIsLoadingPeriods] = useState(true);
  // change min/max to variables throughout code
  const [MinTime, setMinTime] = useState(-5000);
  const [MaxTime, setMaxTime] = useState(2000);
  const [SelectedMinTime, setSelectedMinTime] = useState(-5000);
  const [SelectedMaxTime, setSelectedMaxTime] = useState(2000);
  const [SelectedPlace, setSelectedPlace] = useState("all");
  const [SelectedActivityTypes, setSelectedActivityTypes] = useState([]);
  // const { search } = window.location;
  // const query = new URLSearchParams(search).get("s");
  // const [searchQuery, setSearchQuery] = useState(query || "");
  const [isLoading, setLoading] = useState(true);
  const [isLoadingSidebar, setLoadingSidebar] = useState(true);
  const [isLoadingActivities, setLoadingActivities] = useState(true);
  const [isLoadingArticles, setIsLoadingArticles] = useState(true);

  const [Places, setPlaces] = useState([
    {
      id: 0,
      name_eng: "",
      isRegion: false,
      isGovernate: false,
      isNome: false,
      isSite: false,
      isFeature: false,
      notes: "",
      geojson: "",
      lat: "",
      lon: "",
      depth: 0,
      path: "",
      numchild: 0,
      color: "blue",
    },
  ]);
  const [PlaceMarkers, setPlaceMarkers] = useState([
    {
      id: 0,
      name_eng: "",
      isRegion: false,
      isGovernate: false,
      isNome: false,
      isSite: false,
      isFeature: false,
      notes: "",
      geojson: "",
      lat: "",
      lon: "",
      depth: 0,
      path: "",
      numchild: 0,
      color: "blue",
    },
  ]);
  const [Reload, setReload] = useState(false);
  const [ActivityTypesWithStatus, setActivityTypesWithStatus] = useState([
    { label: "Construction", status: false },
    { label: "Use", status: false },
    { label: "Modification", status: false },
    { label: "Inactive / Defunct", status: false },
    { label: "Destruction", status: false },
  ]);
  const [isLoadingActivityTypes, setIsLoadingActivityTypes] = useState(true);
  const [Activities, setActivities] = useState([
    {
      id: 0,
      type: "",
      startDate: 0,
      endDate: 0,
      associatedPlace: [],
      startPeriod: [],
      endPeriod: [],
      notes: "",
    },
  ]);
  const [FilteredActivities, setFilteredActivities] = useState(Activities);
  const [Articles, setArticles] = useState([
    {
      id: 0,
      subject_area: "",
      title_eng: "",
      title_ar: "",
      title_de: "",
      title_fr: "",
      authors: [""],
      abstract_eng: "",
      abstract_ar: "",
      status: "",
      body: "",
      place: [],
      activity: [],
      period: [],
    },
  ]);
  const [FilteredArticles, setFilteredArticles] = useState(Articles);

  //////// GETTING DATA /////////

  // get places
  useEffect(() => {
    async function getPlaces() {
      try {
        const response = await axios.get("/api/places/");
        setPlaces(response.data);
        setPlaceMarkers(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    }
    getPlaces();
  }, []);

  // get periods
  useEffect(() => {
    async function getPeriods() {
      try {
        const response = await axios.get("/api/periods/");
        setPeriods(response.data);
        setIsLoadingPeriods(false);
      } catch (err) {
        console.error(err);
      }
    }
    getPeriods();
  }, []);

  // get activities
  useEffect(() => {
    async function getActivities() {
      try {
        const response = await axios.get("/api/activities/");
        setActivities(response.data);
        setLoadingActivities(false);
      } catch (err) {
        console.error(err);
      }
    }
    getActivities();
  }, []);

  // get articles
  useEffect(() => {
    async function getArticles() {
      try {
        const response = await axios.get("/api/articles/");
        setArticles(response.data);
        setFilteredArticles(response.data);
        setIsLoadingArticles(false);
      } catch (err) {
        console.error(err);
      }
    }
    getArticles();
  }, []);

  //////// FILTERING /////////

  // filter activities
  useEffect(() => {
    // reset to all activities
    setFilteredActivities(Activities);

    // filter by selected times
    if (SelectedMinTime !== -5000 && SelectedMaxTime !== 2000) {
      const filteredActivityArray = [];
      const filtered = filterActivitiesByTime(
        FilteredActivities,
        SelectedMinTime,
        SelectedMaxTime,
        filteredActivityArray
      );
      setFilteredActivities(filtered);
    }
    // filter by selected activity types
    if (SelectedActivityTypes.length > 0) {
      const filteredActivityArray = [];
      const filtered = filterActivitiesByType(
        FilteredActivities,
        SelectedActivityTypes,
        filteredActivityArray
      );
      setFilteredActivities(filtered);
    }

    setLoadingSidebar(false);
  }, [
    SelectedMinTime,
    SelectedMaxTime,
    SelectedActivityTypes,
    isLoadingSidebar,
  ]);

  // filter articles based on activity type selections
  useEffect(() => {
    const filtered = filterArticlesByActivityType(
      Articles,
      ActivityTypesWithStatus
    );
    setFilteredArticles(filtered);
  }, [ActivityTypesWithStatus, Articles]);

  // set activity type checkboxes
  const handleActivityTypeOnChange = (position) => {
    const updatedCheckedState = ActivityTypesWithStatus.map((type, index) => {
      if (index === position) {
        type = { ...type, status: !type.status };
      }
      return type;
    });
    setActivityTypesWithStatus(updatedCheckedState);

    let checkedActivityTypes = [];
    updatedCheckedState.forEach(function (type) {
      if (type.status) {
        checkedActivityTypes.push(type.label);
      }
    });
    setSelectedActivityTypes(checkedActivityTypes);
  };

  return (
    <div>
      <Header />
      <main className="timemap">
        <div className="timemap__intro">
          <p>Introductory text</p>
        </div>
        <div className="timemap__container">
          <aside className="timemap__sidebars">
            <MapSidebar
              SelectedPeriod={SelectedPeriod}
              SelectedPeriodNode={SelectedPeriodNode}
              ActivityTypesWithStatus={ActivityTypesWithStatus}
              setActivityTypesWithStatus={setActivityTypesWithStatus}
              isLoadingActivityTypes={isLoadingActivityTypes}
              setIsLoadingActivityTypes={setIsLoadingActivityTypes}
              setSelectedPeriod={setSelectedPeriod}
              setSelectedPeriodNode={setSelectedPeriodNode}
              setSelectedMinTime={setSelectedMinTime}
              setSelectedMaxTime={setSelectedMaxTime}
              SelectedMinTime={SelectedMinTime}
              SelectedMaxTime={SelectedMaxTime}
              SelectedActivityTypes={SelectedActivityTypes}
              SelectedPlace={SelectedPlace}
              Articles={Articles}
              setFilteredArticles={setFilteredArticles}
              FilteredArticles={FilteredArticles}
              setSelectedActivityTypes={setSelectedActivityTypes}
              Activities={Activities}
              Places={Places}
              setPlaces={setPlaces}
              updateTimeBySelectedPeriod={updateTimeBySelectedPeriod}
              Periods={Periods}
              handleActivityTypeOnChange={handleActivityTypeOnChange}
              isLoading={isLoading}
              setLoadingSidebar={setLoadingSidebar}
              isLoadingSidebar={isLoadingSidebar}
              MinTime={MinTime}
              MaxTime={MaxTime}
              setReload={setReload}
              Reload={Reload}
              
            />
          </aside>
          <div>
            <MapContainer
              SelectedPeriod={SelectedPeriod}
              SelectedMinTime={SelectedMinTime}
              SelectedMaxTime={SelectedMaxTime}
              isLoading={isLoading}
              Activities={Activities}
              FilteredActivities={FilteredActivities}
              FilteredArticles={FilteredArticles}
              Places={Places}
              SelectedPlace={SelectedPlace}
              setSelectedPlace={setSelectedPlace}
              Reload={Reload}
              PlaceMarkers={PlaceMarkers}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Timemap;
