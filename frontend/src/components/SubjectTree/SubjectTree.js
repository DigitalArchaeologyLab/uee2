import React, { useState, useEffect } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import Subject from "../Subject/Subject";
import GetSubjectTree from "./GetSubjectTree";

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

  // return (
  //   <div className="subjectTree">
  //     <TreeView
  //       className={classes.root}
  //       defaultCollapseIcon={<ExpandMoreIcon />}
  //       defaultExpandIcon={<ChevronRightIcon />}
  //     >
  //       {SubjectTree.map((subject) => (
  //         <Subject key={subject.id} subject_id={subject.id.toString()} name={subject.name} />
  //       ))}
  //     </TreeView>
  //   </div>
  // );

    return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {/* {renderTree(data)} */}
      <GetSubjectTree />
    </TreeView>
  );
}

export default SubjectTree;


// example to try!
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TreeView from '@material-ui/lab/TreeView';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import TreeItem from '@material-ui/lab/TreeItem';

// const data = {
//   id: 'root',
//   name: 'Parent',
//   children: [
//     {
//       id: '1',
//       name: 'Child - 1',
//     },
//     {
//       id: '3',
//       name: 'Child - 3',
//       children: [
//         {
//           id: '4',
//           name: 'Child - 4',
//         },
//       ],
//     },
//   ],
// };

// const useStyles = makeStyles({
//   root: {
//     height: 110,
//     flexGrow: 1,
//     maxWidth: 400,
//   },
// });

// export default function RecursiveTreeView() {
//   const classes = useStyles();

//   const renderTree = (nodes) => (
//     <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
//       {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
//     </TreeItem>
//   );

//   return (
//     <TreeView
//       className={classes.root}
//       defaultCollapseIcon={<ExpandMoreIcon />}
//       defaultExpanded={['root']}
//       defaultExpandIcon={<ChevronRightIcon />}
//     >
//       {renderTree(data)}
//     </TreeView>
//   );
// }

