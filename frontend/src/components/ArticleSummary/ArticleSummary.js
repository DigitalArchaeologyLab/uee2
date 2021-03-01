import React, { Component } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import List from "../../elements/List/List";

function ArticleSummary(props) {
  return (
    <span>
      <h2>
        <Link to="/1">{props.title_eng}</Link>
        <p id="arabic">{props.title_ar}</p>
      </h2>
      <div className="authors">
        <List list={props.authors} />
      </div>
      {props.abstract_eng}
      <p id="arabic">{props.abstract_ar}</p>
      <div className="keywordsList">
        <List list={props.keywords} />
      </div>
    </span>
  );
}

export default ArticleSummary;
