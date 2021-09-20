import React from "react";
import "./Term.css";

function Term(props) {
  return (
    <div className="term">
      <div>
        <span className="term__name">{props.termName}</span>
        <span> - </span>
        <span className="term__def">{props.termDefinition}</span>
      </div>
      <div className="term__spacer"> </div>
    </div>
  );
}

export default Term;
