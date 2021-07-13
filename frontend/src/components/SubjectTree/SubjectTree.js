import React, { useState, useEffect } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import Subject from "../Subject/Subject";

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

function SubjectTree(props) {
  const [SubjectTree, setSubjectTree] = useState([
    {
      id: 0,
      name: "",
      path: "",
      depth: 0,
      numchild: 0,
    },
  ]);

  const classes = useStyles();

  const getSubjects = () => {
    axios
      .get("/api/subjects/")
      .then((res) => setSubjectTree(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getSubjects();
  }, []);

  return (
    <div className="subjectTree">
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {SubjectTree.map((subject) => (
          <Subject key={subject.id} subject_id={subject.id.toString()} name={subject.name} />
        ))}
      </TreeView>
    </div>
  );
}

export default SubjectTree;
