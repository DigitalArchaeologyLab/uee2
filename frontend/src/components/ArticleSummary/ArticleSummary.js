import React from "react";
import { Link } from "react-router-dom";
import List from "../../elements/List/List";

function ArticleSummary(props) {
  return (
    <div className='articleSummary'>
    <span>
      <h2>
        <Link to={`${props.article_id}`}>{props.title_eng}</Link>
        <p id="arabic">{props.title_ar}</p>
      </h2>
      <div>
        <List class="authorsList" key={props.article_id} list={props.authors} />
      </div>
      <p></p>
      <div>
        {props.abstract_eng}
        <p id="arabic">{props.abstract_ar}</p>
      </div>
      <div>
        <List
          class="keywordsList"
          key={props.article_id}
          list={props.keywords}
        />
      </div>
    </span>
    </div>
  );
}

export default ArticleSummary;
