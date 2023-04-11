import React, { useEffect, useState, useLayoutEffect } from "react";
import "./FilterSidebar.css";
import PeriodFacet from "../../components/PeriodTree/PeriodFacet";
import TimesliderFacet from "../../components/Timeslider/TimesliderFacet";
import SearchBarMap from "../../components/Search/SearchBarMap";
import ActivityTypeFacet from "../../components/ActivityList/ActivityTypeFacet";
import ResetButton from "../../elements/Buttons/ResetButton";
import ApplyButton from "../../elements/Buttons/ApplyButton";

function FilterSidebar(props) {
  return (
    <div>
      <div className="mapFacet">
        <PeriodFacet
          setSelectedPeriod={props.setSelectedPeriod}
          setSelectedPeriodNode={props.setSelectedPeriodNode}
          SelectedPeriod={props.SelectedPeriod}
          SelectedPeriodNode={props.SelectedPeriodNode}
          rootName={"Periods"}
          updateTimeBySelectedPeriod={props.updateTimeBySelectedPeriod}
          Periods={props.Periods}
          setSelectedMinTime={props.setSelectedMinTime}
          setSelectedMaxTime={props.setSelectedMaxTime}
        />
      </div>
      <div className="mapFacet">
        <TimesliderFacet
          setSelectedMinTime={props.setSelectedMinTime}
          setSelectedMaxTime={props.setSelectedMaxTime}
          SelectedMinTime={props.SelectedMinTime}
          SelectedMaxTime={props.SelectedMaxTime}
        />
      </div>
      <div className="mapFacet">
        <ActivityTypeFacet
          ActivityTypesWithStatus={props.ActivityTypesWithStatus}
          setActivityTypesWithStatus={props.setActivityTypesWithStatus}
          isLoadingActivityTypes={props.isLoadingActivityTypes}
          setIsLoadingActivityTypes={props.setIsLoadingActivityTypes}
          setSelectedActivityTypes={props.setSelectedActivityTypes}
          handleActivityTypeOnChange={props.handleActivityTypeOnChange}
        />
      </div>
      <div className="mapFacet">
        <SearchBarMap
          searchQuery={props.searchQuery}
          setSearchQuery={props.setSearchQuery}
        />
      </div>
      <div className="mapFacet">
        <span className="filterButtons">
          <ResetButton
            setSelectedPeriod={props.setSelectedPeriod}
            setSelectedPeriodNode={props.setSelectedPeriodNode}
            setSelectedMinTime={props.setSelectedMinTime}
            setSelectedMaxTime={props.setSelectedMaxTime}
            setSelectedActivityTypes={props.setSelectedActivityTypes}
            setLoadingSidebar={props.setLoadingSidebar}
            setActivityTypesWithStatus={props.setActivityTypesWithStatus}
          />
          <ApplyButton
            Articles={props.Articles}
            Activities={props.Activities}
            SelectedActivityTypes={props.SelectedActivityTypes}
            SelectedMaxTime={props.SelectedMaxTime}
            SelectedMinTime={props.SelectedMinTime}
            Places={props.Places}
            Periods={props.Periods}
          />
        </span>
      </div>
    </div>
  );
}

export default FilterSidebar;
