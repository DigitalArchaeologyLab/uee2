import React from "react";
import Map from "./Map2";
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
          Places={props.Places}
          isLoadingActivities={props.isLoadingActivities}
          SelectedPlace={props.SelectedPlace}
          setSelectedPlace={props.setSelectedPlace}
        />
      )}
    </div>
  );
}

export default MapContainer;
