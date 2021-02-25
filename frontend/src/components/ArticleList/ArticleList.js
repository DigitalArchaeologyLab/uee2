import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useRouteMatch } from "react-router-dom";
import ArticleSummary from "../ArticleSummary/ArticleSummary";

function ArticleList(props) {
  const [ArticleList, setArticleList] = useState([
    {
      id: 0,
      title_eng: "",
      title_ar: "",
      author_id: "",
      abstract_eng: "",
      abstract_ar: "",
      body: "",
    },
  ]);

  const refreshList = () => {
    axios
      .get("/api/articles/")
      .then((res) => setArticleList(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    refreshList();
  }, []);

  // let { path, url } = useRouteMatch();

  return (
    <div>
      {ArticleList.map((article) => (
        <div>
          <ArticleSummary
            article_id={article.id}
            title_eng={article.title_eng}
            title_ar={article.title_ar}
            author={article.author_id}
            abstract_eng={article.abstract_eng}
            abstract_ar={article.abstract_ar}
          />
         
          <hr></hr>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
