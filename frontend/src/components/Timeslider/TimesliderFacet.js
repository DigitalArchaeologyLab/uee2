import React from "react";
import Timeslider from "./Timeslider";

function TimesliderFacet(props) {
  return (
    <div className="slider__facet">
      <div className="slider__title">
        <h2>Time range</h2>
      </div>
      <div className="slider__slider">
        <Timeslider
          setSelectedMinTime={props.setSelectedMinTime}
          setSelectedMaxTime={props.setSelectedMaxTime}
          SelectedMinTime={props.SelectedMinTime}
          SelectedMaxTime={props.SelectedMaxTime}
        />
      </div>
    </div>
  );
}

export default TimesliderFacet;
