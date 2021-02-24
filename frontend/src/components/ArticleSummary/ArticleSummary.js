import React, { Component } from "react";
import { Link, useRouteMatch } from "react-router-dom";

function ArticleSummary(props) {
  return (
    <span>
      <h2>
        <Link to="/1">{props.title_eng}</Link>
        <p id="arabic">{props.title_ar}</p>
      </h2>
      {props.author}
      <p></p>
      {props.abstract_eng}
      <p id="arabic">{props.abstract_ar}</p>
    </span>
  );
}

export default ArticleSummary;
