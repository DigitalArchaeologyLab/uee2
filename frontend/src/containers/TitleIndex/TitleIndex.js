import React from "react";
import "./TitleIndex.css";
import ArticleList from "../../components/ArticleList/ArticleList";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function TitleIndex() {
  return (
    <div>
      <Header />
      <ArticleList />
      <Footer />
    </div>
  );
}

export default TitleIndex;
