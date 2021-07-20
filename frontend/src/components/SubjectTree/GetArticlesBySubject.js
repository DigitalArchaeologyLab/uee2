import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleSummary from "../ArticleSummary/ArticleSummary";

function GetArticlesBySubject(props) {
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
      // let articles = articleList.filter((article) =>
      //   props.subjects.map(subject) => {
      //     if (subject.subject_area === article.subject_area)
      // );
      let articles = [];
      // articleList.map((article) => {
      //   article.subject_area;
      //   for (let i = 0; i < props.subjects.length; i++) {
      //     if (article.subject_area == props.subjects[i]) {
      //       articles.push(article.subject_area);
      //     }
      //   }
      // });
      articleList.map(article => {
        for (let i = 0; i < article.subject_area.length; i++) {
          if (props.subjects.includes(article.subject_area[i])) {
            articles.push(article);
          }
        }
      })
      console.log(props.subjects);
      console.log(articleList);
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
