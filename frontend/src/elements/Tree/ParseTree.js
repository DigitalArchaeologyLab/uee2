import RenderTree from "./RenderTree";

function ParseTree(props) {
  // checks if node is a direct child of the current and add to the children array when appropriate
  const addChildren = (node, currentParent) => {
    if (
      node.path.startsWith(currentParent.path) &&
      node.depth !== currentParent.depth &&
      node.depth === currentParent.depth + 1
    ) {
      currentParent.children.push(node);
    }
  };

  // sorting helper based on path
  const sortTree = (a, b) => {
    if (a.path < b.path) {
      return -1;
    }
    if (a.path > b.path) {
      return 1;
    }
    return 0;
  }
  
  // parses tree data into format needed for display
  const parseChildren = (data) => {
    let nodeCount = data.length;
    let sortedData = data.sort(sortTree);
    let parsedData = [];
    for (let i = 0; i < nodeCount; i++) {
      let currentNode = sortedData[i];
      currentNode.children = [];

      if (currentNode.numchild > 0) {
        let currentParent = currentNode;

        for (let j = i; j < nodeCount; j++) {
          let newNode = sortedData[j];
          addChildren(newNode, currentParent);
        }
        if (currentNode.depth === 1) {
          parsedData.push(currentNode);
        }
      } else {
        if (currentNode.depth === 1) {
          parsedData.push(currentNode);
        }
      }
    }
    return parsedData;
  };

  const parsedChildren = parseChildren(props.treeData);

  // add root level object and parsed array of all the children
  const parsedTree = {
    id: 0,
    name_eng: props.rootName,
    children: parsedChildren,
  };

  return (
    <div>
      <RenderTree nodes={parsedTree} handleSelection={props.handleSelection} />
    </div>
  );
}

export default ParseTree;