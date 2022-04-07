import React from "react";
import "./Buttons.css";

function BackButton() {
  const handleBack = () => {
    var filterSidebar = document.getElementById("filterSidebar");
    filterSidebar.style.display = "block";
    var chipsSidebar = document.getElementById("chipsSidebar");
    chipsSidebar.style.display = "none";
    var placeSidebar = document.getElementById("placeSidebar");
    placeSidebar.style.display = "none";
  };
  return (
    <button className="ueeButton" onClick={handleBack}>
      Back
    </button>
  );
}

export default BackButton;
