import React, { useState, useEffect } from "react";
import axios from "axios";
import { getArticlesByPlace } from "../../utils/getArticlesByPlace";

function ArticlesByActivityType(props) {
  const [Activity, setActivity] = useState({});

  const [ConstructionArticles, setConstructionArticles] = useState([]);
  const [UseArticles, setUseArticles] = useState([]);
  const [ModificationArticles, setModificationArticles] = useState([]);
  const [InactiveArticles, setInactiveArticles] = useState([]);
  const [DestructionArticles, setDestructionArticles] = useState([]);

  const getActivity = async (activityID, activityObj) => {
    try {
      const response = await axios.get(`/api/activities/${activityID}`);
      setActivity(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  // filter based on site
  useEffect(() => {
    // FIX - not updating selected place in sync
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
        let activityTemp = article.activity[0];

        getActivity(activityTemp, Activity);

        // parse by type
        // TODO - add article to multiple arrays if tagged with more than one (test)
        switch (Activity.type) {
          case "Construction":
            setConstructionArticles((ConstructionArticles) => [
              ...ConstructionArticles,
              article,
            ]);
          case "Modification":
            setModificationArticles((ModificationArticles) => [
              ...ModificationArticles,
              article,
            ]);
          case "Inactive/Defunct":
            setInactiveArticles((InactiveArticles) => [
              ...InactiveArticles,
              article,
            ]);
          case "Destruction":
            setDestructionArticles((DestructionArticles) => [
              ...DestructionArticles,
              article,
            ]);
          case "Use":
            setUseArticles((UseArticles) => [...UseArticles, article]);
          default:
            break;
        }
      }
    });
  }, [props.SelectedPlace, props.Articles]);

  return (
    <div>
      <div className="ArticlesByActivityType">
        <h2>{props.SelectedPlace}</h2>
        <h3>Construction</h3>
        <p>{ConstructionArticles.map((article) => article.title_eng)}</p>
        <h3>Use</h3>
        <p>{UseArticles.map((article) => article.title_eng)}</p>
        <h3>Modification</h3>
        <p>{ModificationArticles.map((article) => article.title_eng)}</p>
        <h3>Inactive</h3>
        <p>{InactiveArticles.map((article) => article.title_eng)}</p>
        <h3>Destruction</h3>
        <p>{DestructionArticles.map((article) => article.title_eng)}</p>
      </div>
    </div>
  );
}

export default ArticlesByActivityType;
