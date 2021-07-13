import React from "react";
import TreeItem from "@material-ui/lab/TreeItem";

function Subject(props) {
  return (
    <div className='subject'>
      <TreeItem nodeId={props.subject_id} label={props.name} />
    </div>
  );
}

export default Subject;
