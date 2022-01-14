import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getArticlesByPlace } from "../../utils/getArticlesByPlace";
import "./ArticlesByActivityType.css";

function ArticlesByActivityType(props) {
  const [ConstructionArticles, setConstructionArticles] = useState([]);
  const [UseArticles, setUseArticles] = useState([]);
  const [ModificationArticles, setModificationArticles] = useState([]);
  const [InactiveArticles, setInactiveArticles] = useState([]);
  const [DestructionArticles, setDestructionArticles] = useState([]);

  const getPlaceName = (SelectedPlace, Places) => {
    const place = Places.find((element) => element.id === SelectedPlace);
    if (place !== undefined) {
      return place.name_eng;
    }
    return;
  };

  // filter based on site
  useEffect(() => {
    const filtered = getArticlesByPlace(props.Articles, props.SelectedPlace);
    props.setFilteredArticles(filtered);

    setConstructionArticles([]);
    setUseArticles([]);
    setModificationArticles([]);
    setInactiveArticles([]);
    setDestructionArticles([]);

    // parse by activity type
    filtered.forEach((article) => {
      if (article.activity.length === 0) {
        return;
      } else {
        const articleActivities = article.activity;
        for (let i = 0; i < articleActivities.length; i++) {
          const activity = props.Activities.find(
            (element) => element.id === articleActivities[i]
          );

          if (activity.type === "Construction") {
            setConstructionArticles((ConstructionArticles) => [
              ...ConstructionArticles,
              article,
            ]);
          }

          if (activity.type === "Modification") {
            setModificationArticles((ModificationArticles) => [
              ...ModificationArticles,
              article,
            ]);
          }

          if (activity.type === "Inactive / Defunct") {
            setInactiveArticles((InactiveArticles) => [
              ...InactiveArticles,
              article,
            ]);
          }

          if (activity.type === "Destruction") {
            setDestructionArticles((DestructionArticles) => [
              ...DestructionArticles,
              article,
            ]);
          }

          if (activity.type === "Use") {
            setUseArticles((UseArticles) => [...UseArticles, article]);
          }
        }
      }
    });
  }, [props.SelectedPlace, props.Articles]);

  return (
    <div>
      <div className="ArticlesByActivityType">
        <h2>{getPlaceName(props.SelectedPlace, props.Places)}</h2>
        <h3>Construction</h3>
        <ul>
          {ConstructionArticles.map((article) => (
            <li>
              <Link to={`/article/${article.id}`}>{article.title_eng}</Link>
            </li>
          ))}
        </ul>
        <h3>Use</h3>
        <ul>
          {UseArticles.map((article) => (
            <li>
              <Link to={`/article/${article.id}`}>{article.title_eng}</Link>
            </li>
          ))}
        </ul>
        <h3>Modification</h3>
        <ul>
          {ModificationArticles.map((article) => (
            <li>
              <Link to={`/article/${article.id}`}>{article.title_eng}</Link>
            </li>
          ))}
        </ul>
        <h3>Inactive</h3>
        <ul>
          {InactiveArticles.map((article) => (
            <li>
              <Link to={`/article/${article.id}`}>{article.title_eng}</Link>
            </li>
          ))}
        </ul>
        <h3>Destruction</h3>
        <ul>
          {DestructionArticles.map((article) => (
            <li>
              <Link to={`/article/${article.id}`}>{article.title_eng}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ArticlesByActivityType;
