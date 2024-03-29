import React from "react";
import BackButton from "../../elements/Buttons/BackButton";
import ResetButton from "../../elements/Buttons/ResetButton";
import MapChip from "../../elements/Chips/MapChip";

import "./ChipsSidebar.css";

function ChipsSidebar(props) {
  return (
    <div>
      <span className="chipsNav">
        <BackButton />
        <ResetButton
          setSelectedPeriod={props.setSelectedPeriod}
          setSelectedMinTime={props.setSelectedMinTime}
          setSelectedMaxTime={props.setSelectedMaxTime}
          setSelectedActivityTypes={props.setSelectedActivityTypes}
          setSelectedPeriodNode={props.setSelectedPeriodNode}
          setActivityTypesWithStatus={props.setActivityTypesWithStatus}
          setLoadingSidebar={props.setLoadingSidebar}
          Places={props.Places}
          setPlaces={props.setPlaces}
          setReload={props.setReload}
        />
      </span>
      <MapChip
        SelectedActivityTypes={props.SelectedActivityTypes}
        setSelectedActivityTypes={props.setSelectedActivityTypes}
        SelectedPeriod={props.SelectedPeriod}
        setSelectedPeriod={props.setSelectedPeriod}
        setSelectedPeriodNode={props.setSelectedPeriodNode}
        setSelectedMinTime={props.setSelectedMinTime}
        setSelectedMaxTime={props.setSelectedMaxTime}
        SelectedMinTime={props.SelectedMinTime}
        SelectedMaxTime={props.SelectedMaxTime}
        setActivityTypesWithStatus={props.setActivityTypesWithStatus}
        ActivityTypesWithStatus={props.ActivityTypesWithStatus}
        setIsLoadingActivityTypes={props.setIsLoadingActivityTypes}
        handleActivityTypeOnChange={props.handleActivityTypeOnChange}
      />
    </div>
  );
}

export default ChipsSidebar;
