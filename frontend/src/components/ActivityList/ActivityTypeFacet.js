import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./ActivityTypeFacet.css";

function ActivityTypeFacet({
  ActivityTypesWithStatus,
  setSelectedActivityTypes,
  setActivityTypesWithStatus,
  setIsLoadingActivityTypes,
  isLoadingActivityTypes,
  handleActivityTypeOnChange,
}) {
  // const handleOnChange = (position) => {
  //   const updatedCheckedState = ActivityTypesWithStatus.map((type, index) => {
  //     if (index === position) {
  //       type = { ...type, status: !type.status };
  //     }
  //     return type;
  //   });
  //   setActivityTypesWithStatus(updatedCheckedState);

  //   let checkedActivityTypes = [];
  //   updatedCheckedState.forEach(function (type) {
  //     if (type.status) {
  //       checkedActivityTypes.push(type.label);
  //     }
  //   });
  //   setSelectedActivityTypes(checkedActivityTypes);
  // };

  // set Activity types
  useEffect(() => {
    setIsLoadingActivityTypes(false);
  }, [
    setActivityTypesWithStatus,
    setIsLoadingActivityTypes,
    ActivityTypesWithStatus,
  ]);

  return (
    <div className="activitytype__facet">
      <div className="activitytype__title">
        <h2>Activity Types</h2>
      </div>
      <div className="activitytype__selectlist">
        {isLoadingActivityTypes ? (
          <p>Loading activity types...</p>
        ) : (
          <FormGroup>
            {ActivityTypesWithStatus.map((type, index) => (
              <FormControlLabel
                key={type.label}
                control={
                  <Checkbox
                    key={type.label}
                    checked={ActivityTypesWithStatus[index].status}
                    onChange={() => handleActivityTypeOnChange(index)}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label={type.label}
              />
            ))}
          </FormGroup>
        )}
      </div>
    </div>
  );
}

export default ActivityTypeFacet;
