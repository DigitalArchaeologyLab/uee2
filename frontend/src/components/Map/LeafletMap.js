import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet.markercluster/dist/leaflet.markercluster.js";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

function LeafletContainer() {
  const [markersData, setMarkersData] = useState([
    { latLng: { lat: 27.6452, lng: 30.896558 }, title: "hello" },
    { latLng: { lat: 27.6453, lng: 30.896559 }, title: "hi" },
  ]);

  return (
    <div>
      <LeafletMap markersData={markersData} />
    </div>
  );
}

const style = {
  width: "100%",
  height: "800px",
};

function LeafletMap({ markersData }) {
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

  // add layer
  const layerRef = useRef(null);

  useEffect(() => {
    layerRef.current = L.markerClusterGroup().addTo(mapRef.current);
  }, []);

  // update markers
  useEffect(() => {
    layerRef.current.clearLayers();
    markersData.forEach((marker) => {
      L.marker(marker.latLng, { title: marker.title }).addTo(layerRef.current);
    });
  }, [markersData]);

  return <div id="map" style={style} />;
}

export default LeafletContainer;
