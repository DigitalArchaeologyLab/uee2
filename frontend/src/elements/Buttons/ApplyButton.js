import React from "react";
import "./Buttons.css";
import { applyFilters } from "../../utils/applyFilters";

function ApplyButton(props) {
  const handleApply = () => {

    let filteredMarkers = applyFilters(props.Articles, props.Activities, props.SelectedActivityTypes, props.SelectedMaxTime, props.SelectedMinTime, props.Periods, props.MinTime, props.MaxTime, props.Places)

    props.setPlaces(filteredMarkers);
    props.setReload(!props.Reload);

    // adjust sidebar displays
    var filterSidebar = document.getElementById("filterSidebar");
    filterSidebar.style.display = "none";
    var chipsSidebar = document.getElementById("chipsSidebar");
    chipsSidebar.style.display = "block";
  };
  return (
    <button className="ueeButton" onClick={handleApply}>
      Apply
    </button>
  );
}

export default ApplyButton;
