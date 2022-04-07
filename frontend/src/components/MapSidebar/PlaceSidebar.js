import React from "react";
import "./PlaceSidebar.css";

import ArticlesByActivityType from "../../components/ActivityList/ArticlesByActivityType";

function PlaceSidebar(props) {
  return (
    <div>
      <ArticlesByActivityType
        SelectedPlace={props.SelectedPlace}
        Articles={props.Articles}
        FilteredArticles={props.FilteredArticles}
        setFilteredArticles={props.setFilteredArticles}
        Activities={props.Activities}
        Places={props.Places}
      />
    </div>
  );
}

export default PlaceSidebar;
