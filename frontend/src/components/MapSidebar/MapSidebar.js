import React, { useState, useEffect } from "react";
import "./MapSidebar.css";

import FilterSidebar from "./FilterSidebar";
import ChipsSidebar from "./ChipsSidebar";
import PlaceSidebar from "./PlaceSidebar";

function MapSidebar(props) {
  return (
    <div>
      {props.isLoadingSidebar ? (
        <p>Gathering filters...</p>
      ) : (
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
              SelectedActivityTypes={props.SelectedActivityTypes}
              updateTimeBySelectedPeriod={props.updateTimeBySelectedPeriod}
              Periods={props.Periods}
              handleActivityTypeOnChange={props.handleActivityTypeOnChange}
              setLoadingSidebar={props.setLoadingSidebar}
              Articles={props.Articles}
              Activities={props.Activities}
              Places={props.Places}
              setPlaces={props.setPlaces}
              MinTime={props.MinTime}
              MaxTime={props.MaxTime}
              setReload={props.setReload}
              Reload={props.Reload}
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
              handleActivityTypeOnChange={props.handleActivityTypeOnChange}
              setLoadingSidebar={props.setLoadingSidebar}
              setPlaces={props.setPlaces}
              setReload={props.setReload}
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
      )}
    </div>
  );
}

export default MapSidebar;
