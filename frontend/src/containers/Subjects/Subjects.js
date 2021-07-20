import React, { useState, useEffect } from "react";
import GetSubjectTreeData from "../../components/SubjectTree/GetSubjectTreeData"
import GetArticlesBySubject from "../../components/SubjectTree/GetArticlesBySubject"


function Subjects(props) {
  const [SelectedSubjects, setSelectedSubjects] = useState([]);

  // need to get selected subject areas passed to here...time for Redux?
  setSelectedSubjects(["Mythology"]);

  return (
    <div className='article'>
      <GetSubjectTreeData />
      <GetArticlesBySubject subjects={SelectedSubjects} />
    </div>
  );
}

export default Subjects;
