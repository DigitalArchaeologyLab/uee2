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
  const [Activities, setActivities] = useState([
    {
      id: 0,
      type: "",
      startDate: 0,
      endDate: 0,
      associatedLocation: [],
      startPeriod: [],
      endPeriod: [],
      notes: "",
    },
  ]);

  useEffect(() => {
    async function getActivities() {
      try {
        const response = await axios.get("/api/activities/");
        setActivities(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    getActivities();
  }, []);

  let filteredLocations = [];
  const filterLocations = (activities) => {
    activities.forEach((activity) => {
      if (
        activity.startPeriod == props.SelectedPeriod ||
        activity.endPeriod == props.SelectedPeriod
      ) {
        filteredLocations.push(activity);
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
        {filterLocations(Activities)}
        {filteredLocations.map((activity) => (
          <div>
            <Marker
              position={[
                activity.associatedLocation[0].lat,
                activity.associatedLocation[0].lon,
              ]}
            >
              <Popup>
                {activity.associatedLocation[0].name_eng} <br />
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
