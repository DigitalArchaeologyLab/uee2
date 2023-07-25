import React from "react";
import "./Buttons.css";

function ResetButton(props) {
  const handleReset = () => {
    props.setSelectedActivityTypes([]);
    props.setSelectedPeriod(["All"]);
    props.setSelectedPeriodNode(0);
    props.setSelectedMinTime(-5000);
    props.setSelectedMaxTime(2000);
    props.setLoadingSidebar(true);

    props.setActivityTypesWithStatus([
      { label: "Construction", status: false },
      { label: "Use", status: false },
      { label: "Modification", status: false },
      { label: "Inactive / Defunct", status: false },
      { label: "Destruction", status: false },
    ])

    // reset to all places
    // reload map
    

    var filterSidebar = document.getElementById("filterSidebar");
    filterSidebar.style.display = "none";
    var chipsSidebar = document.getElementById("chipsSidebar");
    chipsSidebar.style.display = "none";
    var placeSidebar = document.getElementById("placeSidebar");
    placeSidebar.style.display = "none";
    var newFilterSidebar = document.getElementById("filterSidebar");
    newFilterSidebar.style.display = "block";

  };

  return (
    <button className="ueeButton" onClick={handleReset}>
      Reset
    </button>
  );
}

export default ResetButton;
