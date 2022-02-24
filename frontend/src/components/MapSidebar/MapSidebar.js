import React, { useState, useEffect } from "react";
import "./MapSidebar.css";

import FilterSidebar from "./FilterSidebar";
import ChipsSidebar from "./ChipsSidebar";
import PlaceSidebar from "./PlaceSidebar";

function MapSidebar(props) {

  return (
    <div>
      <div className="filterSidebar" id="filterSidebar">
        <FilterSidebar
          SelectedPeriod={props.SelectedPeriod}
          SelectedPeriodNode={props.SelectedPeriodNode}
          setSelectedPeriod={props.setSelectedPeriod}
          setSelectedPeriodNode={props.setSelectedPeriodNode}
          setSelectedMinTime={props.setSelectedMinTime}
          setSelectedMaxTime={props.setSelectedMaxTime}
          SelectedMinTime={props.SelectedMinTime}
          SelectedMaxTime={props.SelectedMaxTime}
          ActivityTypesWithStatus={props.ActivityTypesWithStatus}
          setActivityTypesWithStatus={props.setActivityTypesWithStatus}
          isLoadingActivityTypes={props.isLoadingActivityTypes}
          setIsLoadingActivityTypes={props.setIsLoadingActivityTypes}
          setSelectedActivityTypes={props.setSelectedActivityTypes}
        />
      </div>

      <div className="chipsSidebar" id="chipsSidebar">
        <ChipsSidebar
          SelectedPeriod={props.SelectedPeriod}
          setSelectedPeriod={props.setSelectedPeriod}
          setSelectedPeriodNode={props.setSelectedPeriodNode}
          setSelectedMinTime={props.setSelectedMinTime}
          setSelectedMaxTime={props.setSelectedMaxTime}
          SelectedMinTime={props.SelectedMinTime}
          SelectedMaxTime={props.SelectedMaxTime}
          setSelectedActivityTypes={props.setSelectedActivityTypes}
          SelectedActivityTypes={props.SelectedActivityTypes}
          setActivityTypesWithStatus={props.setActivityTypesWithStatus}
          ActivityTypesWithStatus={props.ActivityTypesWithStatus}
          isLoadingActivityTypes={props.isLoadingActivityTypes}
          setIsLoadingActivityTypes={props.setIsLoadingActivityTypes}
        />
      </div>

      <div className="placeSidebar" id="placeSidebar">
        <PlaceSidebar
          SelectedPlace={props.SelectedPlace}
          Articles={props.Articles}
          setFilteredArticles={props.setFilteredArticles}
          FilteredArticles={props.FilteredArticles}
          setSelectedActivityTypes={props.setSelectedActivityTypes}
          Activities={props.Activities}
          Places={props.Places}
        />
      </div>
    </div>
  );
}

export default MapSidebar;
