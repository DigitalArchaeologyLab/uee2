import React, { useState } from "react";
import "./Timemap.css";
import Map from "../../components/Map/Map";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PeriodFacet from "../../components/PeriodTree/PeriodFacet";

function Timemap() {
  const [SelectedPeriod, setSelectedPeriod] = useState([]);

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
      <div>
        <PeriodFacet
          setSelectedPeriod={setSelectedPeriod}
          SelectedPeriod={SelectedPeriod}
          rootName={"Periods"}
        />
        <Map SelectedPeriod={SelectedPeriod} />
      </div>
      <Footer />
    </div>
  );
}

export default Timemap;
