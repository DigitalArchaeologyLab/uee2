import React, { useState } from "react";
import "./SubjectBrowse.css";
import ArticlesBySubject from "../../components/SubjectTree/ArticlesBySubject";
import SubjectFacet from "../../components/SubjectTree/SubjectFacet";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function SubjectBrowse(props) {
  const [selectedSubject, setSelectedSubject] = useState(["All"]);

  return (
    <div>
      <Header />
      <main className="subjectBrowse">
        <SubjectFacet
          setSelectedSubject={setSelectedSubject}
          selectedSubject={selectedSubject}
          rootName={"Subject Areas"}
        />
        <ArticlesBySubject selectedSubject={selectedSubject} />
      </main>
      <Footer />
    </div>
  );
}

export default SubjectBrowse;
