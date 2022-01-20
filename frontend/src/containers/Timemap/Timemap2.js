import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Timemap2.css";
import MapContainer from "../../components/Map/MapContainer2";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import filterArticlesByText from "../../utils/filterArticlesByText";
import { filterActivitiesByTime } from "../../utils/filterActivitiesByTime";
import { getArticlesByPlace } from "../../utils/getArticlesByPlace";
import { filterArticlesByActivityType } from "../../utils/filterArticlesByActivityType";

import MapSidebar from "../../components/MapSidebar/MapSidebar";

function Timemap2() {
  const [SelectedPeriod, setSelectedPeriod] = useState(["All"]);
  const [SelectedMinTime, setSelectedMinTime] = useState(-5000);
  const [SelectedMaxTime, setSelectedMaxTime] = useState(2000);
  const [SelectedPlace, setSelectedPlace] = useState("all");
  const [SelectedActivityTypes, setSelectedActivityTypes] = useState([]);
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
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
    { label: "", status: false },
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

  // filter activities
  const filteredActivityArray = [];

  useEffect(() => {
    const filtered = filterActivitiesByTime(
      Activities,
      SelectedMinTime,
      SelectedMaxTime,
      filteredActivityArray
    );
    setFilteredActivities(filtered);
  }, [SelectedMinTime, SelectedMaxTime, Activities]);

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

  // filter articles based on activity type selections
  useEffect(() => {
    const filtered = filterArticlesByActivityType(
      Articles,
      ActivityTypesWithStatus
    );
    setFilteredArticles(filtered);
  }, [ActivityTypesWithStatus]);

  return (
    <div>
      {/* <Header /> */}
      <main className="timemap">
        <div className="timemap__container">
          <MapSidebar
            setSelectedMinTime={setSelectedMinTime}
            setSelectedMaxTime={setSelectedMaxTime}
            SelectedMinTime={SelectedMinTime}
            SelectedMaxTime={SelectedMaxTime}
            SelectedPlace={SelectedPlace}
            Articles={Articles}
            setFilteredArticles={setFilteredArticles}
            FilteredArticles={FilteredArticles}
            setSelectedActivityTypes={setSelectedActivityTypes}
            Activities={Activities}
            Places={Places}
            ActivityTypesWithStatus={ActivityTypesWithStatus}
            setActivityTypesWithStatus={setActivityTypesWithStatus}
            isLoadingActivityTypes={isLoadingActivityTypes}
            setIsLoadingActivityTypes={setIsLoadingActivityTypes}
          />

          <div>
            <MapContainer
              SelectedPeriod={SelectedPeriod}
              SelectedMinTime={SelectedMinTime}
              SelectedMaxTime={SelectedMaxTime}
              isLoading={isLoading}
              isLoadingActivities={isLoadingActivities}
              activities={Activities}
              FilteredArticles={FilteredArticles}
              Places={Places}
              SelectedPlace={SelectedPlace}
              setSelectedPlace={setSelectedPlace}
            />
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default Timemap2;
