import React, { useState } from "react";
import "./Timemap.css";
import MapContainer from "../../components/Map/MapContainer";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PeriodFacet from "../../components/PeriodTree/PeriodFacet";
import TimesliderFacet from "../../components/Timeslider/TimesliderFacet";

function Timemap() {
  const [SelectedPeriod, setSelectedPeriod] = useState(["All"]);
  const [SelectedMinTime, setSelectedMinTime] = useState(-3000);
  const [SelectedMaxTime, setSelectedMaxTime] = useState(1000);

  return (
    <div className="timemap">
      <Header />
      <div className="timemap__intro">
        <h1>Time map</h1>
        <p>
          Short map blurb here so people know how to toggle and use, and also
          what the time map tells us. Can choose a particular phase, dynasty, or
          rulership, or toggle the slider in the map.{" "}
        </p>
      </div>
      <div className="timemap__container">
        <div className="timemap__sidebar">
          <PeriodFacet
            setSelectedPeriod={setSelectedPeriod}
            SelectedPeriod={SelectedPeriod}
            rootName={"Periods"}
          />
          <TimesliderFacet
            setSelectedMinTime={setSelectedMinTime}
            setSelectedMaxTime={setSelectedMaxTime}
            SelectedMinTime={SelectedMinTime}
            SelectedMaxTime={SelectedMaxTime}
          />
        </div>
        <div>
          <MapContainer
            SelectedPeriod={SelectedPeriod}
            SelectedMinTime={SelectedMinTime}
            SelectedMaxTime={SelectedMaxTime}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Timemap;
