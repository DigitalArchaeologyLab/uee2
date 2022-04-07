import React from "react";

function Activity(props) {
  return (
    <div className="activity">
      <p>
        {props.place} ({props.startDate} — {props.endDate}), {props.type}
      </p>
    </div>
  );
}

export default Activity;
