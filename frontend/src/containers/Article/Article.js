import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Article.css";
import ArticleBody from "../../components/ArticleBody/ArticleBody";
import Frontmatter from "../../components/Frontmatter/Frontmatter";
import ReferenceList from "../../components/ReferenceList/ReferenceList";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import SwipeableTemporaryDrawer from "../Drawer/Drawer";
// import MediaCard from "../../components/Image/ImageCard";
import TableOfContents from "../../components/TableOfContents/TableOfContents";
// import Lightbox from "../../components/Figure/Lightbox";

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
    body: "",
    status: "",
  });
  const [drawerState, setDrawerState] = useState({
    right: false,
    bottom: false,
  });
  const [selectedTerm, setSelectedTerm] = useState({
    name_eng: "Example term",
    definition: "Example definition",
  });
  const [imageState, setImageState] = useState(false);
  const handleImageOpen = () => {
    setImageState(true);
  };
  const handleImageClose = () => {
    setImageState(false);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerState({ ...drawerState, [anchor]: open });
  };

  let { id } = useParams();

  useEffect(() => {
    async function getArticle() {
      try {
        const response = await axios.get(`/api/articles/${id}`);
        await setArticle(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    getArticle();
  }, [id]);

  return (
    <div>
      <Header />
      <article className="article">
        <div className="toc">
          <TableOfContents />
        </div>
        <div className="article__frontmatter">
          <Frontmatter
            article_id={article.id}
            title_eng={article.title_eng}
            title_ar={article.title_ar}
            title_de={article.title_de}
            title_fr={article.title_fr}
            authors={article.authors}
            abstract_eng={article.abstract_eng}
            abstract_ar={article.abstract_ar}
          />
        </div>
        <hr></hr>
        <div className="article__body">
          <ArticleBody
            body={article.body}
            toggleDrawer={toggleDrawer}
            selectedTerm={selectedTerm}
            setSelectedTerm={setSelectedTerm}
            imageState={imageState}
            setImageState={setImageState}
            handleImageOpen={handleImageOpen}
            handleImageClose={handleImageClose}
          />
          {/* <MediaCard /> */}
          <SwipeableTemporaryDrawer
            selectedTerm={selectedTerm.name_eng}
            definition={selectedTerm.definition}
            toggleDrawer={toggleDrawer}
            drawerState={drawerState}
            setDrawerState={setDrawerState}
          />
        </div>
        <div className="article__refs">
          <h2 id="references">References</h2>
          <ReferenceList article_id={id} />
        </div>
        {/* <Lightbox /> */}
      </article>
      <Footer />
    </div>
  );
}

export default Article;
