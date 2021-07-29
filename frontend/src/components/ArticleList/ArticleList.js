import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link, useRouteMatch } from "react-router-dom";
import ArticleSummary from "../ArticleSummary/ArticleSummary";

function ArticleList(props) {
  const [ArticleList, setArticleList] = useState([
    {
      id: 0,
      subject_area: "",
      title_eng: "",
      title_ar: "",
      authors: [""],
      abstract_eng: "",
      abstract_ar: "",
      keywords: [""],
      body: "",
      status: "",
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
    <div className='articleList'>
      {ArticleList.map((article) => (
        <div>
          <ArticleSummary
            article_id={article.id}
            title_eng={article.title_eng}
            title_ar={article.title_ar}
            authors={article.authors}
            abstract_eng={article.abstract_eng}
            abstract_ar={article.abstract_ar}
            keywords={article.keywords}
          />
          <hr></hr>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
