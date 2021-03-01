import React from "react";
import List from "../../elements/List/List";

function Frontmatter(props) {
  return (
    <span>
      <h2>
        {props.title_eng}
        <p id="arabic">{props.title_ar}</p>
      </h2>
      <div className="authorsList">
        <List key={props.id} list={props.authors} />
      </div>
      <p className="abstract">{props.abstract_eng}</p>
      <p id="arabic">{props.abstract_ar}</p>
      <List key={props.id} list={props.keywords} />
    </span>
  );
}

export default Frontmatter;
