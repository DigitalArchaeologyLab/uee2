import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Timemap.css";
import MapContainer from "../../components/Map/MapContainer";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PeriodFacet from "../../components/PeriodTree/PeriodFacet";
import TimesliderFacet from "../../components/Timeslider/TimesliderFacet";

import SearchBarMap from "../../components/Search/SearchBarMap";
import filterArticlesByText from "../../utils/filterArticlesByText";

function Timemap() {
  const [SelectedPeriod, setSelectedPeriod] = useState(["All"]);
  const [SelectedMinTime, setSelectedMinTime] = useState(-3000);
  const [SelectedMaxTime, setSelectedMaxTime] = useState(1000);
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const [isLoading, setLoading] = useState(true);
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
    },
  ]);
  const [FilteredArticles, setFilteredArticles] = useState(Articles);

  useEffect(() => {
    async function getActivities() {
      try {
        const response = await axios.get("/api/activities/");
        setActivities(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    }
    getActivities();
  }, []);
  
  // filter articles when query is entered
  useEffect(() => {
    let filtered = filterArticlesByText(Articles, searchQuery);
    setFilteredArticles(filtered);    
  }, [searchQuery]);

  return (
    <div>
      <Header />
      <main className="timemap">
        <div className="timemap__intro">
          <h1>Time map</h1>
          <p>
            Short map blurb here so people know how to toggle and use, and also
            what the time map tells us. Can choose a particular phase, dynasty,
            or rulership, or toggle the slider in the map.{" "}
          </p>
        </div>
        <div className="timemap__container">
          <aside className="timemap__sidebar">
            <PeriodFacet
              setSelectedPeriod={setSelectedPeriod}
              SelectedPeriod={SelectedPeriod}
              rootName={"Periods"}
            />
            <TimesliderFacet
              setSelectedMinTime={setSelectedMinTime}
              setSelectedMaxTime={setSelectedMaxTime}
              SelectedMinTime={SelectedMinTime}
              SelectedMaxTime={SelectedMaxTime}
            />
            <SearchBarMap
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </aside>
          <div>
            <MapContainer
              SelectedPeriod={SelectedPeriod}
              SelectedMinTime={SelectedMinTime}
              SelectedMaxTime={SelectedMaxTime}
              isLoading={isLoading}
              activities={Activities}
              FilteredArticles={FilteredArticles}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Timemap;
