import React, { useState, useEffect } from "react";
import Activity from "./Activity";

function ActivityList(props) {

  return (
    <div>
      <div className="activityList">
        {props.isLoadingActivities ? (
          <p>Loading activities...</p>
        ) : (
          props.FilteredActivities.map((activity) => (
            <div key={activity.id}>
              <Activity
                type={activity.type}
                place={activity.associatedPlace[0].name_eng}
                startDate={activity.startDate}
                endDate={activity.endDate}
                startPeriod={activity.startPeriod}
                endPeriod={activity.endPeriod}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ActivityList;
