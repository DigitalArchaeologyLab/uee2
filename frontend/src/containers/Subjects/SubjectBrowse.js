import React, { useState } from "react";
import "./SubjectBrowse.css";
import ArticlesBySubject from "../../components/SubjectTree/ArticlesBySubject";
import SubjectFacet from "../../components/SubjectTree/SubjectFacet";
import Header from "../../components/Header/Header";

function SubjectBrowse(props) {
  const [selectedSubject, setSelectedSubject] = useState([]);

  return (
    <div>
      <Header />
      <div className="subjectBrowse">
        <SubjectFacet
          setSelectedSubject={setSelectedSubject}
          selectedSubject={selectedSubject}
        />
        <ArticlesBySubject selectedSubject={selectedSubject} />
      </div>
    </div>
  );
}

export default SubjectBrowse;
