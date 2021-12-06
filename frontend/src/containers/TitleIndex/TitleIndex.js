import { useState, useEffect } from "react";
import axios from "axios";
import "./TitleIndex.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import filterArticlesByText from "../../utils/filterArticlesByText";
import ArticleSummary from "../../components/ArticleSummary/ArticleSummary";
import Sidebar from "../Sidebar/Sidebar";

import filterArticlesByLetter from "../../utils/filterArticlesByLetter";

function TitleIndex(props) {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const [selectedLanguage, setSelectedLanguage] = useState("eng");
  const [alphabet, setAlphabet] = useState("latinAlphabet");
  const [selectedLetter, setSelectedLetter] = useState("");
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

  const compare = (a, b) => {
    let sortTitle;
    switch (selectedLanguage) {
      case "ar":
        sortTitle = "title_ar";
        break;
      case "de":
        sortTitle = "title_de";
        break;
      case "fr":
        sortTitle = "title_fr";
        break;
      default:
        sortTitle = "title_eng";
        break;
    }

    const titleA = a[sortTitle].toUpperCase();
    const titleB = b[sortTitle].toUpperCase();

    // handle diacritics in titles
    if (new Intl.Collator().compare(titleA, titleB) > 0) {
      return 1;
    } else if (new Intl.Collator().compare(titleA, titleB) < 0) {
      return -1;
    }
  };

  // get articles from API
  useEffect(() => {
    async function getArticles() {
      try {
        const response = await axios.get("/api/articles/");
        let allArticles = response.data;
        allArticles.sort(compare);
        setArticles(allArticles);
        setFilteredArticles(allArticles);
      } catch (err) {
        console.error(err);
      }
    }
    getArticles();
  }, [selectedLanguage]);

  // filter articles when query is entered
  useEffect(() => {
    let filtered = filterArticlesByText(Articles, searchQuery);
    setFilteredArticles(filtered);
    // clear selected letters
    let selectedLetterButton = document.querySelector(".selectedLetterButton");
    if (selectedLetterButton !== null) {
      selectedLetterButton.classList.remove("selectedLetterButton");
    }
  }, [searchQuery]);

  // sort articles when language is selected and set alphabet
  useEffect(() => {
    let allArticles = Articles;
    allArticles.sort(compare);
    setArticles(allArticles);
    if (selectedLanguage === "ar") {
      setAlphabet("arabicAlphabet");
    } else {
      setAlphabet("latinAlphabet");
    }
    // clear selected letters
    let selectedLetterButton = document.querySelector(".selectedLetterButton");
    if (selectedLetterButton !== null) {
      selectedLetterButton.classList.remove("selectedLetterButton");
    }
  }, [selectedLanguage]);

  // filter articles when a letter is selected
  useEffect(() => {
    let articlesByLetter = filterArticlesByLetter(
      Articles,
      selectedLetter,
      selectedLanguage
    );
    setFilteredArticles(articlesByLetter);
  }, [selectedLetter, selectedLanguage]);

  return (
    <div>
      <Header />
      <main className="titleIndex">
        <Sidebar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setSelectedLanguage={setSelectedLanguage}
          setSelectedLetter={setSelectedLetter}
          selectedLanguage={selectedLanguage}
          alphabet={alphabet}
        />
        <ul className="articleList">
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
                selectedLanguage={selectedLanguage}
              />
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default TitleIndex;
