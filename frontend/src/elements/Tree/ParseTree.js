import SubjectTree from "../../components/SubjectTree/SubjectTree";

function ParseTree(props) {
  // check if subject is a direct child of the current and add to the children array when appropriate
  const addChildren = (subject, currentParent) => {
    if (
      subject.path.startsWith(currentParent.path) &&
      subject.depth !== currentParent.depth &&
      subject.depth === currentParent.depth + 1
    ) {
      currentParent.children.push(subject);
    }
  };

  // fix issue - subjects shouldn't be added if already a child
  // consider sorting array by path to reduce full traversals (j can just pick up after the current i)
  const parseChildren = (data) => {
    let subjectCount = data.length;
    let parsedData = data;
    for (let i = 0; i < subjectCount; i++) {
      let currentSubject = parsedData[i];
      currentSubject.children = [];

      if (currentSubject.numchild > 0) {
        let currentParent = currentSubject;

        for (let j = 0; j < subjectCount; j++) {
          let newSubject = parsedData[j];
          addChildren(newSubject, currentParent);
        }
      }
    }
    console.log(parsedData);
    return parsedData;
  };

  const parsedChildren = parseChildren(props.treeData);

  const parsedTree = {
    id: 0,
    name: "Subject Areas",
    children: parsedChildren,
  };

  return (
    <div>
      <SubjectTree subjects={parsedTree} />
    </div>
  );
}

export default ParseTree;
