import React, { useEffect, useState } from "react";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import axios from "axios";
import { parseTree } from "../../utils/parseTree";

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

function PeriodFacet(props) {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(["0"]);
  const [selected, setSelected] = useState([]);
  const [tree, setTree] = useState([
    {
      id: 0,
      name_eng: "Periods",
      path: "0000",
      depth: 0,
      numchild: 0,
      start: 0,
      end: 0,
    },
  ]);

  useEffect(() => {
    async function getNodes() {
      try {
        const response = await axios.get("/api/periods/");
        const parsedNodes = await parseTree(response.data, "Periods");
        await setTree(parsedNodes);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    }
    getNodes();
  }, []);

  const handleToggle = (event, nodeId) => {
    setExpanded(nodeId);
  };

  const handleSelect = (event, nodeId) => {
    props.setSelectedPeriodNode(nodeId);
    props.setSelectedPeriod(event.target.innerHTML);
    props.updateTimeBySelectedPeriod(
      event.target.innerHTML,
      props.Periods,
      props.setSelectedMinTime,
      props.setSelectedMaxTime
    );
  };

  const processTree = (nodes) => (
    <TreeItem
      key={nodes.id}
      nodeId={nodes.id.toString()}
      label={nodes.name_eng}
    >
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => processTree(node))
        : null}
    </TreeItem>
  );

  return (
    <div className="period__facet">
      <div className="period__title">
        <h2>Time Periods</h2>
      </div>
      <div className="period__period">
        <TreeView
          className={classes.root}
          defaultExpanded={["0"]}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          expanded={expanded}
          selected={props.SelectedPeriodNode}
          onNodeToggle={handleToggle}
          onNodeSelect={handleSelect}
          multiSelect
        >
          {isLoading ? <p>Loading</p> : processTree(tree)}
        </TreeView>
      </div>
    </div>
  );
}

export default PeriodFacet;
