function ParseTree(props) {

  // check if subject is a direct child of the current and add to the children array when appropriate
  const addChildren = (subject, currentParent) => {
    if (subject.path.startsWith(currentParent.path) && subject.depth != currentParent.depth && subject.depth == currentParent.depth + 1) {
      currentParent.children.push(subject);
    }
  }

  const parseChildren = (data) => {
    let subjectCount = data.length;
    let parsedData = data;
    for (let i = 0; i < subjectCount; i++) {
      let currentSubject = parsedData[i];
      currentSubject.children = [];
      
      if (currentSubject.numchild > 0) {
        let currentParent = currentSubject;
        // consider sorting array by path to reduce full traversals (j can just pick up after the current i)
        for (let j = 0; j < subjectCount; j++) {
          let newSubject = parsedData[j];
          addChildren(newSubject, currentParent);
        }
      }
    }
  }

  const parsedTree = parseChildren(props.treeData);

  return parsedTree;
}

export default ParseTree;