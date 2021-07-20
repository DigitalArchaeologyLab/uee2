import React, { useState, useEffect } from "react";
import axios from "axios";
import ParseTree from "../../elements/Tree/ParseTree";

function GetSubjectTreeData(props) {
  const [Tree, setTree] = useState([
    {
      id: 0,
      name_eng: "",
      path: "",
      depth: 0,
      numchild: 0,
    },
  ]);

  const getSubjects = async () => {
    try {
      const response = await axios.get("/api/subjects/");
      await setTree(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getSubjects();
  }, []);

  return (
    <div>
      <ParseTree treeData={Tree} rootName={"Subject Areas"} />
    </div>
  );
}

export default GetSubjectTreeData;
