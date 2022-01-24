import React from "react";
import "./Buttons.css";

function ApplyButton() {
  const handleApply = () => {
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
