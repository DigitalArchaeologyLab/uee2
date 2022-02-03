import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getArticlesByPlace } from "../../utils/getArticlesByPlace";
import "./ArticlesByActivityType.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function ArticlesByActivityType({
  Articles,
  SelectedPlace,
  setFilteredArticles,
  Activities,
  Places,
}) {
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
    const filtered = getArticlesByPlace(Articles, SelectedPlace);
    setFilteredArticles(filtered);

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
          const activity = Activities.find(
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

          if (activity.type === "Inactive / defunct time") {
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
  }, [SelectedPlace, Articles, Activities, setFilteredArticles]);

  const setAccordion = (typeArray, typeTitle) => {
    if (typeArray.length > 0) {
      return (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="construction-content"
            id="construction-header"
          >
            <h3>{typeTitle}</h3>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              {typeArray.map((article) => (
                <li>
                  <Link key={article.id} to={`/article/${article.id}`}>
                    {article.title_eng}
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
      );
    }
  };

  return (
    <div>
      <div className="ArticlesByActivityType">
        <h2>{getPlaceName(SelectedPlace, Places)}</h2>
        {setAccordion(ConstructionArticles, "Construction")}
        {setAccordion(UseArticles, "Use")}
        {setAccordion(ModificationArticles, "Modification")}
        {setAccordion(InactiveArticles, "Inactive / Defunct")}
        {setAccordion(DestructionArticles, "Destruction")}
      </div>
    </div>
  );
}

export default ArticlesByActivityType;
