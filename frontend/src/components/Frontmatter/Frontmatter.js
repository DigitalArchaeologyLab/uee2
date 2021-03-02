import React from "react";
import List from "../../elements/List/List";
import "./Frontmatter.css";

function Frontmatter(props) {
  return (
    <span>
      <h2>
        {props.title_eng}
        <p id="arabic">{props.title_ar}</p>
      </h2>
      <div>
        <List class="authorsList" list={props.authors} />
      </div>
      <div>
        <p className="abstract">{props.abstract_eng}</p>
        <p id="arabic">{props.abstract_ar}</p>
      </div>
      <div>
        <List class="keywordsList" list={props.keywords} />
      </div>
    </span>
  );
}

export default Frontmatter;
