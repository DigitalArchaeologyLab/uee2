import React, { useEffect } from "react";
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
}) {
  const handleOnChange = (position) => {
    const updatedCheckedState = ActivityTypesWithStatus.map((type, index) => {
      if (index === position) {
        type = { ...type, status: !type.status };
      }
      return type;
    });

    setActivityTypesWithStatus(updatedCheckedState);
    let checkedActivityTypes = [];
    updatedCheckedState.forEach(function (type) {
      if (type.status) {
        checkedActivityTypes.push(type.label);
      }
    });
    setSelectedActivityTypes(checkedActivityTypes);
  };

  // set Activity types
  useEffect(() => {
    setActivityTypesWithStatus([
      { label: "Construction", status: false },
      { label: "Use", status: false },
      { label: "Modification", status: false },
      { label: "Inactive / Defunct", status: false },
      { label: "Destruction", status: false },
    ]);
    setIsLoadingActivityTypes(false);
  }, [setActivityTypesWithStatus, setIsLoadingActivityTypes]);

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
                key={index}
                control={
                  <Checkbox
                    checked={ActivityTypesWithStatus[index].status}
                    onChange={() => handleOnChange(index)}
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
