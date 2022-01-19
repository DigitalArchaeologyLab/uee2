import React, { useState, useEffect } from "react";
import SimpleAccordion from "./Accordion";
import "./MapSidebar.css";
import PeriodFacet from "../../components/PeriodTree/PeriodFacet";
import TimesliderFacet from "../../components/Timeslider/TimesliderFacet";
import SearchBarMap from "../../components/Search/SearchBarMap";

import ArticlesByActivityType from "../../components/ActivityList/ArticlesByActivityType";

function MapSidebar(props) {
  return (
    <div>
      <aside className="timemap__sidebar">
        {/* <PeriodFacet
              setSelectedPeriod={props.setSelectedPeriod}
              SelectedPeriod={props.SelectedPeriod}
              rootName={"Periods"}
            /> */}

        <TimesliderFacet
          setSelectedMinTime={props.setSelectedMinTime}
          setSelectedMaxTime={props.setSelectedMaxTime}
          SelectedMinTime={props.SelectedMinTime}
          SelectedMaxTime={props.SelectedMaxTime}
        />
        {/* <SearchBarMap
              searchQuery={props.searchQuery}
              setSearchQuery={props.setSearchQuery}
            /> */}
        <hr></hr>

        <ArticlesByActivityType
          SelectedPlace={props.SelectedPlace}
          Articles={props.Articles}
          setFilteredArticles={props.setFilteredArticles}
          Activities={props.Activities}
          Places={props.Places}
        />
      </aside>
    </div>
  );
}

export default MapSidebar;
