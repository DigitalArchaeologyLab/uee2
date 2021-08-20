import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import "./Timeslider.css";

const marks = [
  {
    value: -3000,
    label: "3000 BCE",
  },
  {
    value: -2000,
    label: "2000 BCE",
  },
  {
    value: -1000,
    label: "1000 BCE",
  },
  {
    value: 0,
    label: "0",
  },
  {
    value: 1000,
    label: "1000 CE",
  },
];

function SliderThumbComponent(props) {
  return (
    <span id="timeslider__handles" {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

function Timeslider(props) {
  const [value, setValue] = useState([
    props.SelectedMinTime,
    props.SelectedMaxTime,
  ]);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    // add logic to process left and right values in order to update props
  };

  // need to add logic to process BCE (and CE) values or limit to integers
  const handleMinInputChange = (event) => {
    setValue([event.target.value === "" ? "" : event.target.value, value[1]]);
    props.setSelectedMinTime(parseInt(event.target.value));
  };

  const handleMaxInputChange = (event) => {
    setValue([value[0], event.target.value === "" ? "" : event.target.value]);
    props.setSelectedMaxTime(parseInt(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <div>
      <div className="timeslider">
        <div className="timeslider__inputs">
          <Input
            id="timesliderInput__min"
            value={value[0]}
            onChange={handleMinInputChange}
            onBlur={handleBlur}
            inputProps={{
              type: "text",
              "aria-labelledby": "input-slider",
            }}
          />
          <Input
            id="timesliderInput__max"
            value={value[1]}
            onChange={handleMaxInputChange}
            onBlur={handleBlur}
            inputProps={{
              type: "text",
              "aria-labelledby": "input-slider",
            }}
          />
        </div>
        <Slider
          id="timeslider__root"
          ThumbComponent={SliderThumbComponent}
          value={value}
          onChange={handleSliderChange}
          marks={marks}
          min={-3000}
          max={1000}
        />
      </div>
    </div>
  );
}

export default Timeslider;
