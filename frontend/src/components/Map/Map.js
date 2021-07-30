import React, { useEffect, useState } from "react";
// import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

function Map() {
  const [lat, setLat] = useState(27.6452);
  const [lon, setLon] = useState(30.896558);

  return (
    <div className="timemap">
      <MapContainer
        center={[27.6452, 30.896558]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lon]}>
          <Popup>
            El-Armarna
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
