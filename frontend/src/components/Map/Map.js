import React, { useEffect, useRef } from "react";
import ReactDOMServer from "react-dom/server";
import Popup from "./Popup";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.markercluster/dist/leaflet.markercluster.js";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

// import LocationOnIcon from "@mui/icons-material/LocationOn";

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

  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [24.084918, 32.88612],
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
    new L.Control.Zoom({ position: "topright" }).addTo(mapRef.current);
  }, []);

  useEffect(() => {
    layerRef.current.clearLayers();
    // add places to cluster layer
    props.Places.forEach((place) => {
      const latitude = parseFloat(place.lat);
      const longitude = parseFloat(place.lon);
      const latlng = { lat: latitude, lng: longitude };
      const title = place.name_eng;

      const marker = L.marker(latlng, { title: title, id: place.id });
      marker.addTo(layerRef.current);
      // TODO - onclick open sidebar and filter activities/articles/etc appropriately
      marker.on("click", function (e) {
        // test portal instead to see if that fixes the delay/sync issue with the popup responsiveness
        this.bindPopup(
          ReactDOMServer.renderToString(<Popup placeName={title} />)
        );
        props.setSelectedPlace(marker.options.id);
        var filterSidebar = document.getElementById("filterSidebar");
        filterSidebar.style.display = "none";
        var chipsSidebar = document.getElementById("chipsSidebar");
        chipsSidebar.style.display = "block";
        var placeSidebar = document.getElementById("placeSidebar");
        placeSidebar.style.display = "block";
      });
    });
  });

  return (
    <div className="timemap__map">
      <div id="map" style={style} />
    </div>
  );
}

export default Map;
