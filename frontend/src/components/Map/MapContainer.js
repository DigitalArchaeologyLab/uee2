import React from "react";
import Map from "./Map";
import "./MapContainer.css";

function MapContainer(props) {
  return (
    <div>
      {props.isLoading ? (
        <p className="loadingMap">Loading</p>
      ) : (
        <Map
          activities={props.activities}
          SelectedPeriod={props.SelectedPeriod}
          SelectedMinTime={props.SelectedMinTime}
          SelectedMaxTime={props.SelectedMaxTime}
          FilteredArticles={props.FilteredArticles}
        />
      )}
    </div>
  );
}

export default MapContainer;
