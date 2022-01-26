import React, { useState, useEffect } from "react";
import BackButton from "../../elements/Buttons/BackButton";
import ResetButton from "../../elements/Buttons/ResetButton";
import MapChip from "../../elements/Chips/MapChip";

import "./ChipsSidebar.css";

function ChipsSidebar(props) {
  return (
    <div>
      <span className="chipsNav">
        <BackButton />
        <ResetButton />
      </span>
      <MapChip
        SelectedActivityTypes={props.SelectedActivityTypes}
        setSelectedActivityTypes={props.setSelectedActivityTypes}
        SelectedPeriod={props.SelectedPeriod}
        setSelectedPeriod={props.setSelectedPeriod}
        setSelectedMinTime={props.setSelectedMinTime}
        setSelectedMaxTime={props.setSelectedMaxTime}
        SelectedMinTime={props.SelectedMinTime}
        SelectedMaxTime={props.SelectedMaxTime}
      />
    </div>
  );
}

export default ChipsSidebar;
