import * as React from "react";
import Chip from "@mui/material/Chip";

export default function MapChip(props) {
  let updatedActivityTypesWithStatus = props.ActivityTypesWithStatus;

  const handleActivityDelete = (name) => {
    let typeIndex = updatedActivityTypesWithStatus.findIndex(
      (activityType) => activityType.label === name
    );

    props.SelectedActivityTypes.forEach((type) => {
      if (type === name) {
        props.handleActivityTypeOnChange(typeIndex);
      }
    });
  };

  const handlePeriodDelete = () => {
    props.setSelectedPeriod(["All"]);
    props.setSelectedPeriodNode(0);
  };

  const handleMinTimeDelete = () => {
    props.setSelectedMinTime(-5000);
    props.setReload(true);
  };

  const handleMaxTimeDelete = () => {
    props.setSelectedMaxTime(2000);
  };

  return (
    <span>
      <br></br>
      {props.SelectedActivityTypes.map((type) => (
        <Chip
          key={type}
          label={type}
          name={type}
          onDelete={handleActivityDelete.bind(this, type)}
        />
      ))}
      {props.SelectedPeriod[0] !== "All" ? (
        <Chip
          label={props.SelectedPeriod}
          name={props.SelectedPeriod}
          onDelete={handlePeriodDelete.bind(this, props.SelectedPeriod)}
        />
      ) : null}
      {props.SelectedMinTime !== -5000 ? (
        <Chip
          label={props.SelectedMinTime}
          name={props.SelectedMinTime}
          onDelete={handleMinTimeDelete.bind(this, props.SelectedMinTime)}
        />
      ) : null}
      {props.SelectedMaxTime !== 2000 ? (
        <Chip
          label={props.SelectedMaxTime}
          name={props.SelectedMaxTime}
          onDelete={handleMaxTimeDelete.bind(this, props.SelectedMaxTime)}
        />
      ) : null}
    </span>
  );
}
