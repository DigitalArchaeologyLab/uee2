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

  let filteredPlaces = [];

  useEffect(() => {
    async function getPlaces() {
      try {
        const response = await axios.get("/api/locations/");
        setSites(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    async function getActivities() {
      try {
        const response = await axios.get("/api/activities/");
        setActivities(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    getPlaces();
    getActivities();
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
        {/* {filterPlaces(Sites)}
        {filteredPlaces.map((site) => (
          <div>
            <Marker position={[site.lat, site.lon]}>
              <Popup>
                {site.name_eng} <br /> {site.period}
              </Popup>
            </Marker>
          </div>
        ))} */}
        {filterLocations(Activities)}
        {filteredLocations.map((activity) => (
          <div>
            <Marker position={[activity.associatedLocation[0].lat, activity.associatedLocation[0].lon]}>
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
