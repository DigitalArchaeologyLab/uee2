import React, { useState } from "react";
import ArticlesBySubject from "../../components/SubjectTree/ArticlesBySubject";
import SubjectFacet from "../../components/SubjectTree/SubjectFacet";
import "./SubjectBrowse.css";

function SubjectBrowse(props) {
  const [selectedSubject, setSelectedSubject] = useState([]);

  return (
    <div className="subjectBrowse">
      <SubjectFacet
        setSelectedSubject={setSelectedSubject}
        selectedSubject={selectedSubject}
      />
      <ArticlesBySubject selectedSubject={selectedSubject} />
    </div>
  );
}

export default SubjectBrowse;
