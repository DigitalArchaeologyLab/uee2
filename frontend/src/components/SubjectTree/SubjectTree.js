import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

function SubjectTree(props) {
  const classes = useStyles();

  // const renderTree = (nodes) => (
  //   <TreeItem key={nodes.id} nodeId={nodes.id.toString} label={nodes.name}>
  //     {!nodes.children.length
  //       ? null
  //       : nodes.children.map((node) => renderTree(node))
  //     }
  //   </TreeItem>
  // );

  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id.toString()} label={nodes.name}>
      {Array.isArray(nodes.children)
      ? nodes.children.map((node) => renderTree(node))
      : null}
    </TreeItem>
  );


  return (
    <div>
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpanded={["root"]}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {renderTree(props.subjects)}
      </TreeView>
    </div>
  );
}

export default SubjectTree;
