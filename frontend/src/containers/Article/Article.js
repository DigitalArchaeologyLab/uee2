import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleBody from "../../components/ArticleBody/ArticleBody";
import Frontmatter from "../../components/Frontmatter/Frontmatter";


function Article(props) {
  const [article, setArticle] = useState([
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
      .get("/api/articles/1")
      .then((res) => setArticle(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    refreshList();
  }, []);

  return (
    <div>
      <Frontmatter title_eng={article.title_eng} title_ar={article.title_ar} author={article.author_id} abstract_eng={article.abstract_eng} abstract_ar={article.abstract_ar} />
      <ArticleBody body={article.body} />
    </div>
  );
}

export default Article;
