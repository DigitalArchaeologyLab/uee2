import React, { useState, useEffect } from "react";
import axios from "axios";
import Map from "./Map";
import "./MapContainer.css";

function MapContainer(props) {
  const [isLoading, setLoading] = useState(true);
  const [Activities, setActivities] = useState([
    {
      id: 0,
      type: "",
      startDate: 0,
      endDate: 0,
      associatedPlace: [],
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
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    }
    getActivities();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p className="loadingMap">Loading</p>
      ) : (
        <Map
          activities={Activities}
          SelectedPeriod={props.SelectedPeriod}
          SelectedMinTime={props.SelectedMinTime}
          SelectedMaxTime={props.SelectedMaxTime}
        />
      )}
    </div>
  );
}

export default MapContainer;
