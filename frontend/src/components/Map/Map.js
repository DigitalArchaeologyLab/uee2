import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import "leaflet.markercluster/dist/leaflet.markercluster.js";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const style = {
  width: "100%",
  height: "800px",
};

function Map(props) {

  // create map
  const mapRef = useRef(null);

  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [27.6452, 30.896558],
      zoom: 13,
      scrollWheelZoom: false,
      zoomControl: false,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }),
      ],
    });
  }, []);

  // add layer with marker clustering
  const layerRef = useRef(null);

  useEffect(() => {
    layerRef.current = L.markerClusterGroup().addTo(mapRef.current);
  }, []);


  let filteredLocations = [];
  const filterLocations = (activities) => {
    activities.forEach((activity) => {
      if (
        activity.startPeriod == props.selectedPeriod ||
        activity.endPeriod == props.selectedPeriod
      ) {
        filteredLocations.push(activity);
      }
    });
  };

  // add markers to layer
  useEffect(() => {
    layerRef.current.clearLayers();
    filterLocations(props.activities);
    filteredLocations.forEach((activity) => {

      const latitude = parseFloat(activity.associatedLocation[0].lat);
      const longitude = parseFloat(activity.associatedLocation[0].lon);
      const latlng = {"lat": latitude, "lng": longitude}
      const title = activity.associatedLocation[0].name_eng;

      L.marker(latlng, {title: title}).addTo(layerRef.current);
    });
  }, [filteredLocations]);

  return (
    <div className="timemap__map">
      <div id="map" style={style} /> 
    </div>
  );
}

export default Map;
