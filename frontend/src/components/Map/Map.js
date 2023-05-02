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

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

// L.Marker.prototype.options.icon = DefaultIcon;

const greyIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png',
  shadowUrl: iconShadow,
});

const style = {
  width: "100%",
  height: "800px",
};

function Map(props) {
  // create the basic map structure
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [24.084918, 32.88612],
      zoom: 6,
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

  // add marker clustering & zoom controls
  const layerRef = useRef();

  useEffect(() => {
    layerRef.current = L.markerClusterGroup().addTo(mapRef.current);
    new L.Control.Zoom({ position: "topright" }).addTo(mapRef.current);
  }, []);

  // add markers
  useEffect(() => {
    layerRef.current.clearLayers();
    console.log(props.Places);
    
    // add places to cluster layer
    props.Places.forEach((place) => {
      const latitude = parseFloat(place.lat);
      const longitude = parseFloat(place.lon);
      const latlng = { lat: latitude, lng: longitude };
      const title = place.name_eng;

      let iconColor = DefaultIcon;

      if (place.color === "grey") {
        iconColor = greyIcon;
      } 

      const marker = L.marker(latlng, { title: title, id: place.id, icon: iconColor });
      marker.addTo(layerRef.current);

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
