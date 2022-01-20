import React, { useState, useEffect } from "react";
import "./MapSidebar.css";
import PeriodFacet from "../../components/PeriodTree/PeriodFacet";
import TimesliderFacet from "../../components/Timeslider/TimesliderFacet";
import SearchBarMap from "../../components/Search/SearchBarMap";
import ActivityTypeFacet from "../../components/ActivityList/ActivityTypeFacet";

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
        <ActivityTypeFacet
          ActivityTypesWithStatus={props.ActivityTypesWithStatus}
          setActivityTypesWithStatus={props.setActivityTypesWithStatus}
          isLoadingActivityTypes={props.isLoadingActivityTypes}
          setIsLoadingActivityTypes={props.setIsLoadingActivityTypes}
          setSelectedActivityTypes={props.setSelectedActivityTypes}
        />
        <hr></hr>

        <ArticlesByActivityType
          SelectedPlace={props.SelectedPlace}
          Articles={props.Articles}
          FilteredArticles={props.FilteredArticles}
          setFilteredArticles={props.setFilteredArticles}
          Activities={props.Activities}
          Places={props.Places}
        />
      </aside>
    </div>
  );
}

export default MapSidebar;
