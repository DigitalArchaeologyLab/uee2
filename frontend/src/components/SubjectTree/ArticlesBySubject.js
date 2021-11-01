import React, { useEffect, useState } from "react";
import axios from "axios";
import ArticleSummary from "../ArticleSummary/ArticleSummary";

function ArticlesBySubject(props) {
  const [ArticleList, setArticleList] = useState([
    {
      id: 0,
      subject_area: [],
      title_eng: "",
      title_ar: "",
      authors: [],
      abstract_eng: "",
      abstract_ar: "",
      body: "",
      status: "",
      transient_subject_ancestors: [],
    },
  ]);

  let filteredArticles = [];

  useEffect(() => {
    async function getArticles() {
      try {
        const response = await axios.get("/api/articlesBySubjects/");
        setArticleList(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    getArticles();
  }, []);

  const filterArticles = (articles) => {
    // show all of the articles unless a specific subject has been selected
    if (props.selectedSubject[0] === "All") {
      filteredArticles.push(...articles);
    } else {
      // filter based on the selected subject
      articles.forEach((article) => {
        for (let i = 0; i < article.transient_subject_ancestors.length; i++) {
          if (article.transient_subject_ancestors[i] === props.selectedSubject) {
            filteredArticles.push(article);
          }
        }
      })};
  };

  return (
    <div className="subjectBrowse__articles">
      {filterArticles(ArticleList)}
      {filteredArticles.map((article) => (
        <div>
          <ArticleSummary
            article_id={article.id}
            title_eng={article.title_eng}
            title_ar={article.title_ar}
            authors={article.authors}
            abstract_eng={article.abstract_eng}
            abstract_ar={article.abstract_ar}
          />
          <hr></hr>
        </div>
      ))}
    </div>
  );
}

export default ArticlesBySubject;
