import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleSummary from "../ArticleSummary/ArticleSummary";

function GetArticlesBySubject(props) {
  const [SelectedSubjects, setSelectedSubjects] = useState(["Geography"]);
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

  const getArticles = async () => {
    try {
      const response = await axios.get("/api/articles/");
      const articleList = await response.data;

      let articles = [];

      // need to get selected subject areas passed to here...
     
      articleList.map((article) => {
        for (let i = 0; i < article.subject_area.length; i++) {
          if (SelectedSubjects.includes(article.subject_area[i])) {
            articles.push(article);
          }
        }
      });

      setArticleList(articles);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="articleList">
      {ArticleList.map((article) => (
        <div>
          <ArticleSummary
            key={article.id}
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

export default GetArticlesBySubject;
