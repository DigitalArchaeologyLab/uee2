import React, { useState, useEffect } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import ParseTree from "../../elements/Tree/ParseTree";

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

  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </TreeItem>
  );

    return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <ParseTree treeData={renderTree(SubjectTree)} />
    </TreeView>
  );
}

export default SubjectTree;