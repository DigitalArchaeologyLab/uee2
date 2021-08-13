import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Article.css";
import ArticleBody from "../../components/ArticleBody/ArticleBody";
import Frontmatter from "../../components/Frontmatter/Frontmatter";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Article(props) {
  const [article, setArticle] = useState({
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
  });

  let { id } = useParams();

  useEffect(() => {

    const getArticle = () => {
      axios
        .get(`/api/articles/${id}`)
        .then((res) => setArticle(res.data))
        .catch((err) => console.log(err));
    };
    getArticle();
  }, [id]);

  return (
    <div>
      <Header />
      <div className="article">
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
      <Footer />
    </div>
  );
}

export default Article;
