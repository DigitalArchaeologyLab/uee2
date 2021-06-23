import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ArticleBody from "../../components/ArticleBody/ArticleBody";
import Frontmatter from "../../components/Frontmatter/Frontmatter";

function Article(props) {
  const [article, setArticle] = useState(
    {
      id: 0,
      title_eng: "",
      title_ar: "",
      title_de: "",
      title_fr: "",
      authors: [""],
      abstract_eng: "",
      abstract_ar: "",
      keywords: [""],
      body: "",
      status: "",
    },
  );

  let {id} = useParams();

  const refreshList = () => {
    axios
      .get(`/api/articles/${id}`)
      .then((res) => setArticle(res.data))
      .catch((err) => console.log(err));
  };

  useEffect((refreshList) => {
    refreshList();
  }, []);

  return (
    <div className='article'>
      <Frontmatter
        article_id={article.id}
        title_eng={article.title_eng}
        title_ar={article.title_ar}
        title_de={article.title_de}
        title_fr={article.title_fr}
        authors={article.authors}
        abstract_eng={article.abstract_eng}
        abstract_ar={article.abstract_ar}
        keywords={article.keywords}
      />
      <hr></hr>
      <ArticleBody body={article.body} />
    </div>
  );
}

export default Article;
