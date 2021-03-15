import React from "react";
import List from "../../elements/List/List";
import "./Frontmatter.css";

function Frontmatter(props) {
  return (
    <div className="articleFrontmatter">
      <span>
        <h2>
          {props.title_eng}
          <p id="arabic">{props.title_ar}</p>
        </h2>
        <h3>
          {props.title_de}
          <br></br>
          {props.title_fr}
        </h3>
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
    </div>
  );
}

export default Frontmatter;
