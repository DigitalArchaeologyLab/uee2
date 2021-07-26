import React, { useState } from "react";
import "../Subjects/SubjectBrowse.css";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

function Sidebar(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(["0"]);
  const [selected, setSelected] = React.useState([]);

  const handleToggle = (event, nodeId) => {
    setExpanded(nodeId);
  };

  const handleSelect = (event, nodeId) => {
    setSelected(nodeId);
    props.setSelectedSubject(event.target.innerHTML);
  };

  const subjects = {
    id: 0,
    name_eng: "Subject Areas",
    children: [
      {
        id: 1,
        name_eng: "Geography",
        children: [],
      },
      {
        id: 2,
        name_eng: "Religion",
        children: [
          {
            id: 3,
            name_eng: "Mythology",
            children: [],
          },
        ],
      },
    ],
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
    <div>
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
        {processTree(subjects)}
      </TreeView>
    </div>
  );
}

function Articles(props) {
  const articles = [
    { name: "Geography Article", subject: ["Geography"] },
    { name: "Religion Article", subject: ["Religion"] },
    { name: "Myth Article", subject: ["Religion", "Mythology"] },
    { name: "Another Geography Article", subject: ["Geography"] },
  ];

  let filteredArticles = [];

  const filterArticles = (articles) => {
    articles.map((article) => {
      for (let i = 0; i < article.subject.length; i++) {
        if (article.subject[i] == props.selectedSubject) {
          filteredArticles.push(article);
        }
      }
    });
  };

  return (
    <div className="articles">
      {filterArticles(articles)}
      {filteredArticles.map((article) => (
        <div>
          <h2>{article.name}</h2>
          <h4>{article.subject}</h4>
        </div>
      ))}
    </div>
  );
}

function Simple() {
  const [selectedSubject, setSelectedSubject] = useState([]);

  return (
    <div className="subjectBrowse">
      <Sidebar
        setSelectedSubject={setSelectedSubject}
        selectedSubject={selectedSubject}
      />
      <Articles selectedSubject={selectedSubject} />
    </div>
  );
}

export default Simple;
