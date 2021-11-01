import React from "react";
import List from "../../elements/List/List";
import "./Frontmatter.css";

function Frontmatter(props) {
  return (
    <div className="articleFrontmatter">
      <span>
        <h2 id={props.title_eng}>{props.title_eng}</h2>
        <p id="arabic">{props.title_ar}</p>

        <p>{props.title_de}</p>
        <p>{props.title_fr}</p>
        <br></br>
        <div>
          <List class="authorsList" list={props.authors} />
        </div>
        <div>
          <p className="abstract">{props.abstract_eng}</p>
          <p id="arabic">{props.abstract_ar}</p>
        </div>
      </span>
    </div>
  );
}

export default Frontmatter;
