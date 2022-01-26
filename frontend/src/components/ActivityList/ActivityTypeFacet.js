import React, { useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./ActivityTypeFacet.css";

function ActivityTypeFacet(props) {
  const handleOnChange = (position) => {
    const updatedCheckedState = props.ActivityTypesWithStatus.map(
      (type, index) => {
        if (index === position) {
          type = { ...type, status: !type.status };
        }
        return type;
      }
    );

    props.setActivityTypesWithStatus(updatedCheckedState);
    let checkedActivityTypes = [];
    updatedCheckedState.map(function (type) {
        if (type.status) {
          checkedActivityTypes.push(type.label);
        }
      });
    props.setSelectedActivityTypes(checkedActivityTypes);
  };

  // set Activity types
  useEffect(() => {
    props.setActivityTypesWithStatus([
      { label: "Construction", status: false },
      { label: "Use", status: false },
      { label: "Modification", status: false },
      { label: "Inactive / Defunct", status: false },
      { label: "Destruction", status: false },
    ]);
    props.setIsLoadingActivityTypes(false);
  }, []);

  return (
    <div className="activitytype__facet">
      <div className="activitytype__title">
        <h2>Activity Types</h2>
      </div>
      <div className="activitytype__selectlist">
        {props.isLoadingActivityTypes ? (
          <p>Loading activity types...</p>
        ) : (
          <FormGroup>
            {props.ActivityTypesWithStatus.map((type, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={props.ActivityTypesWithStatus[index].status}
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
