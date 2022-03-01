import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Timemap.css";
import MapContainer from "../../components/Map/MapContainer";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

// import filterArticlesByText from "../../utils/filterArticlesByText";
import { filterActivitiesByTime } from "../../utils/filterActivitiesByTime";
// import { getArticlesByPlace } from "../../utils/getArticlesByPlace";
import { filterArticlesByActivityType } from "../../utils/filterArticlesByActivityType";
import { filterActivitiesByType } from "../../utils/filterActivitiesByType";

import MapSidebar from "../../components/MapSidebar/MapSidebar";

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
  const [isLoadingPeriods, setIsLoadingPeriods] = useState(true);
  // change to variables throughout code
  const [SelectedMinTime, setSelectedMinTime] = useState(-5000);
  const [SelectedMaxTime, setSelectedMaxTime] = useState(2000);
  const [SelectedPlace, setSelectedPlace] = useState("all");
  const [SelectedActivityTypes, setSelectedActivityTypes] = useState([]);
  // const { search } = window.location;
  // const query = new URLSearchParams(search).get("s");
  // const [searchQuery, setSearchQuery] = useState(query || "");
  const [isLoading, setLoading] = useState(true);
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
    },
  ]);
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
  const [ReloadFilterSidebar, setReloadFilterSidebar] = useState(false);

  // get places
  useEffect(() => {
    async function getPlaces() {
      try {
        const response = await axios.get("/api/places/");
        setPlaces(response.data);
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

  // filter activities
  // TODO - change to only update when Apply is clicked
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
  }, [SelectedMinTime, SelectedMaxTime, SelectedActivityTypes]);

  // filter articles based on activity type selections
  useEffect(() => {
    const filtered = filterArticlesByActivityType(
      Articles,
      ActivityTypesWithStatus
    );
    setFilteredArticles(filtered);
  }, [ActivityTypesWithStatus, Articles]);

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
              ReloadFilterSidebar={ReloadFilterSidebar}
              setSelectedPeriod={setSelectedPeriod}
              setSelectedPeriodNode={setSelectedPeriodNode}
              setSelectedMinTime={setSelectedMinTime}
              setSelectedMaxTime={setSelectedMaxTime}
              SelectedMinTime={SelectedMinTime}
              SelectedMaxTime={SelectedMaxTime}
              SelectedActivityTypes={SelectedActivityTypes}
              setReloadFilterSidebar={setReloadFilterSidebar}
              SelectedPlace={SelectedPlace}
              Articles={Articles}
              setFilteredArticles={setFilteredArticles}
              FilteredArticles={FilteredArticles}
              setSelectedActivityTypes={setSelectedActivityTypes}
              Activities={Activities}
              Places={Places}
              updateTimeBySelectedPeriod={updateTimeBySelectedPeriod}
              Periods={Periods}
            />
          </aside>
          <div>
            <MapContainer
              SelectedPeriod={SelectedPeriod}
              SelectedMinTime={SelectedMinTime}
              SelectedMaxTime={SelectedMaxTime}
              isLoading={isLoading}
              isLoadingActivities={isLoadingActivities}
              Activities={Activities}
              FilteredActivities={FilteredActivities}
              FilteredArticles={FilteredArticles}
              Places={Places}
              SelectedPlace={SelectedPlace}
              setSelectedPlace={setSelectedPlace}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Timemap;
