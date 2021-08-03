import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

function Map(props) {
  const [Sites, setSites] = useState([
    {
      id: 0,
      name_eng: "Site name",
      altnames_eng: "",
      name_ar: "",
      altnames_ar: "",
      isRegion: false,
      isGovernate: false,
      isNome: false,
      isSite: false,
      notes: "",
      geojson: "",
      lat: 27.6452,
      lon: 30.896558,
      parents: [],
      children: [],
      period: "Prehistory",
    },
  ]);

  let filteredPlaces = [];

  useEffect(() => {
    async function getPlaces() {
      try {
        const response = await axios.get("/api/places/");
        setSites(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    getPlaces();
  }, []);

  const filterPlaces = (places) => {
    places.forEach((place) => {
      for (let i = 0; i < place.period.length; i++) {
        if (place.period[i] === props.SelectedPeriod) {
          filteredPlaces.push(place);
        }
      }
    });
  };

  return (
    <div className="timemap__map">
      <MapContainer
        center={[27.6452, 30.896558]}
        zoom={13}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filterPlaces(Sites)}
        {filteredPlaces.map((site) => (
          <div>
            <Marker position={[site.lat, site.lon]}>
              <Popup>
                {site.name_eng} <br /> {site.period}
              </Popup>
            </Marker>
          </div>
        ))}

        <ZoomControl position="topright" />
      </MapContainer>
    </div>
  );
}

export default Map;
