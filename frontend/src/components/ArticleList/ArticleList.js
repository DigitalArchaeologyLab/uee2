import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ArticleList.css";
import ArticleSummary from "../ArticleSummary/ArticleSummary";

function ArticleList(props) {
  const [ArticleList, setArticleList] = useState([
    {
      id: 0,
      subject_area: "",
      title_eng: "nope",
      title_ar: "",
      title_de: "",
      title_fr: "",
      authors: [""],
      abstract_eng: "",
      abstract_ar: "",
      status: "",
      body: "",
    },
  ]);

  useEffect(() => {
    setArticleList(props.filteredArticles);
  }, [props.filteredArticles]);

  return (
    <div>
      <div className="articleList">
        {props.filteredArticles.map((article) => (
          <div>
            <ArticleSummary
              article_id={article.id}
              title_eng={article.title_eng}
              title_ar={article.title_ar}
              title_de={article.title_de}
              title_fr={article.title_fr}
              authors={article.authors}
              abstract_eng={article.abstract_eng}
              abstract_ar={article.abstract_ar}
              status={article.status}
            />
            <hr className="articleList__hr"></hr>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticleList;
