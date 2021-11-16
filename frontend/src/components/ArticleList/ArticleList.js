import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ArticleList.css";
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
      status: "",
      body: "",
    },
  ]);

  async function getArticleList() {
    try {
      const response = await axios.get("/api/articles/");
      setArticleList(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getArticleList();
  }, []);

  return (
    <div>
      <div className="articleList">
        {ArticleList.map((article) => (
          <div>
            <ArticleSummary
              article_id={article.id}
              title_eng={article.title_eng}
              title_ar={article.title_ar}
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
