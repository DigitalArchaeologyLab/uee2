import { useState, useEffect } from "react";
import axios from "axios";

import "./TitleIndex.css";
import ArticleList from "../../components/ArticleList/ArticleList";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/Search/SearchBar";
import filterArticlesByText from "../../utils/filterArticlesByText";
import ArticleSummary from "../../components/ArticleSummary/ArticleSummary";

function TitleIndex(props) {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const [Articles, setArticles] = useState([
    {
      id: 0,
      subject_area: "",
      title_eng: "",
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
  const [FilteredArticles, setFilteredArticles] = useState(Articles);

  useEffect(() => {
    async function getArticles() {
      try {
        const response = await axios.get("/api/articles/");
        setArticles(response.data);
        setFilteredArticles(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    getArticles();
  }, []);

  useEffect(() => {
    let filtered = filterArticlesByText(Articles, searchQuery);
    setFilteredArticles(filtered);
  }, [searchQuery]);

  return (
    <div>
      <Header />
      <div className="searchbar">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>

      <ul>
        {FilteredArticles.map((article) => (
          <li key={article.id}>
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
          </li>
        ))}
      </ul>

      <Footer />
    </div>
  );
}

export default TitleIndex;
