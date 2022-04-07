import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import List from "../../elements/List/List";
import "./ArticleSummary.css";

function ArticleSummary(props) {
  // check status (published/unpublished) of the article then show full summary or title only appropriately
  const [isLoading, setIsLoading] = useState(true);
  const [articleSummaryJSX, setArticleSummaryJSX] = useState("JSX");

  // show title in selected language
  const setArticleSummaryByStatus = useCallback(() => {
    let title;
    switch (props.selectedLanguage) {
      case "ar":
        title = props.title_ar;
        break;
      case "de":
        title = props.title_de;
        break;
      case "fr":
        title = props.title_fr;
        break;
      default:
        title = props.title_eng;
        break;
    }

    if (props.status === "U") {
      setArticleSummaryJSX(
        <h2 className="article__title__unpublished">
          {title}
          {/* <p id="arabic">{props.title_ar}</p> */}
        </h2>
      );
    } else {
      setArticleSummaryJSX(
        <span>
          <h2>
            <Link className="article__title" to={`article/${props.article_id}`}>
              {title}
            </Link>
            {/* <p id="arabic">{props.title_ar}</p> */}
          </h2>
          <div>
            <List
              class="authorsList"
              key={props.article_id}
              list={props.authors}
            />
          </div>
          <p></p>
          <div>
            {props.abstract_eng}
            <p id="arabic">{props.abstract_ar}</p>
          </div>
        </span>
      );
    }
  }, [
    props.abstract_ar,
    props.abstract_eng,
    props.article_id,
    props.authors,
    props.selectedLanguage,
    props.status,
    props.title_ar,
    props.title_de,
    props.title_eng,
    props.title_fr,
  ]);

  useEffect(() => {
    setArticleSummaryByStatus();
    setIsLoading(false);
  }, [setArticleSummaryByStatus, isLoading, props.selectedLanguage]);

  return (
    <div className="articleSummary">
      {isLoading ? <p>Gathering articles...</p> : articleSummaryJSX}
    </div>
  );
}

export default ArticleSummary;
