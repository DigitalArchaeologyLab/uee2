import React, { useState, useEffect } from "react";
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
          SelectedPeriod={props.SelectedPeriod}
          rootName={"Periods"}
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
          <ResetButton />
          <ApplyButton />
        </span>
      </div>
    </div>
  );
}

export default FilterSidebar;
