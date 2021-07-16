let data = [
  {
    id: 1,
    name: "A",
    depth: 1,
    path: "0001",
    numchild: 1,
  },
  {
    id: 2,
    name: "A1",
    depth: 2,
    path: "00010003",
    numchild: 0,
  },
  {
    id: 3,
    name: "B",
    depth: 1,
    path: "0002",
    numchild: 2,
  },
  {
    id: 4,
    name: "B1",
    depth: 2,
    path: "00020003",
    numchild: 0,
  },
  {
    id: 5,
    name: "B2",
    depth: 2,
    path: "00020005",
    numchild: 1,
  },
  {
    id: 6,
    name: "B2a",
    depth: 3,
    path: "000200050006",
    numchild: 1,
  },
  {
    id: 6,
    name: "B2a1",
    depth: 4,
    path: "0002000500060007",
    numchild: 0,
  },
];

function addChildren(subject, currentParent) {
  let childDepth = currentParent.depth - 1;
  if (subject.path.startsWith(currentParent.path) && subject.depth != currentParent.depth && subject.depth == currentParent.depth + 1) {
    currentParent.children.push(subject);
  }
}

let subjectCount = data.length;

function parseChildren(data) {
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
}

parseChildren(data);
