import React, { useEffect, useState } from "react";
import "./Timeline.css";

function Timeline() {
  const [isLoading, setLoading] = useState(true);

  const sliderInteractions = () => {
    let slider = document.getElementById("timeRange");
    let output = document.getElementById("leftTime");
    output.innerHTML = slider.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function () {
      output.innerHTML = this.value;
    };
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div class="timeline">
      <input
        type="range"
        min="1"
        max="100"
        defaultValue="0"
        class="timeline__slider"
        id="timeRange"
      ></input>
      <p>Earliest: <span id="leftTime"></span></p>
      {isLoading ? <p>Loading</p> : sliderInteractions()}
    </div>
  );
}

export default Timeline;
