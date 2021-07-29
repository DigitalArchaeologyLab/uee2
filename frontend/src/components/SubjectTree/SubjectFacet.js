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

function SubjectFacet(props) {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(["0"]);
  const [selected, setSelected] = useState([]);
  const [tree, setTree] = useState([
    {
      id: 0,
      name_eng: "Subject Areas",
      path: "0000",
      depth: 0,
      numchild: 0,
    },
  ]);

  useEffect(() => {
    async function getSubjects() {
      try {
        const response = await axios.get("/api/subjects/");
        const parsedSubjects = await parseTree(response.data);
        await setTree(parsedSubjects);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    }
    getSubjects();
  }, []);

  const handleToggle = (event, nodeId) => {
    setExpanded(nodeId);
  };

  const handleSelect = (event, nodeId) => {
    setSelected(nodeId);
    props.setSelectedSubject(event.target.innerHTML);
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
    <div className="subjectBrowse__sidebar">
      <TreeView
        className={classes.root}
        defaultExpanded={["0"]}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expanded}
        selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}
        multiSelect
      >
        {isLoading ? <p>Loading</p> : processTree(tree)}
      </TreeView>
    </div>
  );
}

export default SubjectFacet;
