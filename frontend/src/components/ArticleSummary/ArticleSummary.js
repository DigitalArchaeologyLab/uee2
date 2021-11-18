import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import List from "../../elements/List/List";
import "./ArticleSummary.css";

function ArticleSummary(props) {
  // check status (published/unpublished) of the article then show full summary or title only appropriately
  const [isLoading, setIsLoading] = useState(true);
  const [articleSummaryJSX, setArticleSummaryJSX] = useState("JSX");

  const setArticleSummaryByStatus = () => {
    console.log(props.status);

    if (props.status === "U") {
      setArticleSummaryJSX(
        <h2 className="article__title__unpublished">
          {props.title_eng}
          <p id="arabic">{props.title_ar}</p>
        </h2>
      );
    } else {
      setArticleSummaryJSX(
        <span>
          <h2>
            <Link className="article__title" to={`${props.article_id}`}>
              {props.title_eng}
            </Link>
            <p id="arabic">{props.title_ar}</p>
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
  };

  useEffect(() => {
    setArticleSummaryByStatus();
    setIsLoading(false);
  }, [isLoading]);

  return (
    <div className="articleSummary">
      {isLoading ? <p>Gathering articles...</p> : articleSummaryJSX}
    </div>
  );
}

export default ArticleSummary;
