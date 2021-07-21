import React, { useState, useEffect } from "react";
import GetSubjectTreeData from "../../components/SubjectTree/GetSubjectTreeData"
import GetArticlesBySubject from "../../components/SubjectTree/GetArticlesBySubject"


function Subjects(props) {
  

  return (
    <div className='article'>
      <GetSubjectTreeData />
      <GetArticlesBySubject />
    </div>
  );
}

export default Subjects;
