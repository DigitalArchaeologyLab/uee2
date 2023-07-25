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
          Activities={props.Activities}
          FilteredActivities={props.FilteredActivities}
          SelectedPeriod={props.SelectedPeriod}
          SelectedMinTime={props.SelectedMinTime}
          SelectedMaxTime={props.SelectedMaxTime}
          FilteredArticles={props.FilteredArticles}
          Places={props.Places}
          PlaceMarkers={props.PlaceMarkers}
          SelectedPlace={props.SelectedPlace}
          setSelectedPlace={props.setSelectedPlace}
          Reload={props.Reload}
        />
      )}
    </div>
  );
}

export default MapContainer;
