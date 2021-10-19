import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.markercluster/dist/leaflet.markercluster.js";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { filterActivitiesByPeriod } from "../../utils/filterActivitiesByPeriod";
import { filterActivitiesByTime } from "../../utils/filterActivitiesByTime";

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
  // create the basic map structure
  const mapRef = useRef(null);
  const [FilteredActivities, setFilteredActivities] = useState(
    props.activities
  );

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

  // add markers to layer filtered by periods selected
  useEffect(() => {
    
    // filter list of activities based on selections from period facet
    let activitiesFilteredByPeriod = [];
    activitiesFilteredByPeriod = filterActivitiesByPeriod(
      props.activities,
      props.SelectedPeriod,
      activitiesFilteredByPeriod
    );

    // filter list of activities based on selections from time slider & inputs
    let activitiesFilteredByTime = [];
    activitiesFilteredByTime = filterActivitiesByTime(
      props.activities,
      props.SelectedMinTime,
      props.SelectedMaxTime,
      activitiesFilteredByTime
    );

    // join filtered activities into array with only unique activties
    let joinedActivities = [
      ...new Set([...activitiesFilteredByPeriod, ...activitiesFilteredByTime]),
    ];
    setFilteredActivities(joinedActivities);
  }, [
    props.activities,
    props.SelectedPeriod,
    props.SelectedMinTime,
    props.SelectedMaxTime,
  ]);

  useEffect(() => {
    layerRef.current.clearLayers();
    // add places to map based on filtered activities
    FilteredActivities.forEach((activity) => {
      const latitude = parseFloat(activity.associatedPlace[0].lat);
      const longitude = parseFloat(activity.associatedPlace[0].lon);
      const latlng = { lat: latitude, lng: longitude };
      const title = activity.associatedPlace[0].name_eng;

      L.marker(latlng, { title: title }).addTo(layerRef.current);
    });
  });

  return (
    <div className="timemap__map">
      <div id="map" style={style} />
    </div>
  );
}

export default Map;
