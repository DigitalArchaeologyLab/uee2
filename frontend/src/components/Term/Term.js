import React from "react";
import "./Term.css";

function Term(props) {
  return (
    <div className="term">
      <div className="term__name">{props.termName}</div>
      <div className="term__def">{props.termDefinition}</div>
    </div>
  );
}

export default Term;
