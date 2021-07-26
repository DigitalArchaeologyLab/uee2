import React, { useEffect, useLayoutEffect, useState } from "react";
import "../Subjects/SubjectBrowse.css";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import axios from "axios";
import { getSubjects } from "../../utils/getSubjects";
import { parseTree } from "../../utils/parseTree";

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

function Sidebar(props) {
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

  useEffect(async () => {
    try {
      const response = await axios.get("/api/subjects/");
      const parsedSubjects = await parseTree(response.data);
      await setTree(parsedSubjects);
      setLoading(false);
      console.log(parsedSubjects);
    } catch (err) {
      console.error(err);
    }
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
        { isLoading ? <p>Loading</p> : processTree(tree)}
      </TreeView>
    </div>
  );
}

function Articles(props) {
  const [ArticleList, setArticleList] = useState([
    {
      id: 0,
      subject_area: [],
      title_eng: "",
      title_ar: "",
      authors: [],
      abstract_eng: "",
      abstract_ar: "",
      keywords: [],
      body: "",
      status: "",
    },
  ]);

  let filteredArticles = [];

  useEffect(async () => {
    try {
      const response = await axios.get("/api/articles/");
      setArticleList(response.data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  // const articles = [
  //   { title_eng: "Geography Article", subject: ["Geography"] },
  //   { title_eng: "Religion Article", subject: ["Religion"] },
  //   { title_eng: "Myth Article", subject: ["Religion", "Mythology"] },
  //   { title_eng: "Another Geography Article", subject: ["Geography"] },
  // ];

  const filterArticles = (articles) => {
    articles.map((article) => {
      for (let i = 0; i < article.subject_area.length; i++) {
        if (article.subject_area[i] == props.selectedSubject) {
          filteredArticles.push(article);
        }
      }
    });
  };

  return (
    <div className="articles">
      {filterArticles(ArticleList)}
      {filteredArticles.map((article) => (
        <div>
          <h2>{article.title_eng}</h2>
          <h4>{article.subject_area}</h4>
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
