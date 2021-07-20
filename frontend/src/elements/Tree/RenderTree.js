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

function RenderTree(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const handleToggle = (event, nodeId) => {
    setExpanded(nodeId);
  };

  const handleSelect = (event, nodeId) => {
    console.log(event.target.innerHTML);
    setSelected(nodeId);
  };

  const processTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id.toString()} label={nodes.name_eng}>
      {Array.isArray(nodes.children)
      ? nodes.children.map((node) => processTree(node))
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
        expanded={expanded}
        selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}
        multiSelect
      >
        {processTree(props.nodes)}
      </TreeView>
    </div>
  );
}

export default RenderTree;
