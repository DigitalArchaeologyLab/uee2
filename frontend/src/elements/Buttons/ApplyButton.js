import React from "react";
import "./Buttons.css";
import { filterArticlesBySelections } from "../../utils/filterArticlesBySelections";
import { editPlaceMarkersByFilteredArticles } from "../../utils/editPlaceMarkersByFilteredArticles";

function ApplyButton(props) {
  const handleApply = () => {

    let filteredArticles = filterArticlesBySelections(props.Articles, props.Activities, props.SelectedActivityTypes, props.SelectedMaxTime, props.SelectedMinTime, props.Periods, props.MinTime, props.MaxTime);

    let filteredMarkers = editPlaceMarkersByFilteredArticles(props.Places,filteredArticles);
    props.setPlaces(filteredMarkers);

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
