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
  const [expandAll, setExpandAll] = useState(false);
  const [expandedActivityType, setExpandedActivityType] = useState("");
  const [expandText, setExpandText] = useState("Expand all");
  const [expandOne, setExpandOne] = useState(false);

  const onClickExpandAll = () => {
    setExpandAll((prevState) => !prevState);
    if (expandText === "Expand all") {
      setExpandText("Collapse all");
    } else {
      setExpandText("Expand all");
      setExpandOne(false);
    }
  };

  const onClickExpand = (clickedActivityType) => {
    // console.log(clickedActivityType);

    // clicked on type title
    setExpandedActivityType(clickedActivityType.target.firstChild.data);

    // // clicked on accordion space
    // setExpandedActivityType(clickedActivityType.target.firstChild.innerHTML);
    // // clicked on arrow
    // setExpandedActivityType(clickedActivityType.target.parentNode.parentNode.parentNode.innerHTML);

    setExpandOne((prevState) => !prevState);
  };

  const parseExpand = (typeTitle) => {
    if (expandAll || (typeTitle === expandedActivityType && expandOne)) {
      return true;
    } else {
      return false;
    }
  };

  function getPlaceName(SelectedPlace, Places) {
    const place = Places.find((element) => element.id === SelectedPlace);
    if (place !== undefined) {
      return place.name_eng;
    }
    return;
  }

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
        <Accordion
          expanded={parseExpand(typeTitle)}
          onClick={onClickExpand}
          className={typeTitle}
        >
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
                <li key={article.id}>
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
      <button className="ExpandAll" onClick={onClickExpandAll}>
        {expandText}
      </button>
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
