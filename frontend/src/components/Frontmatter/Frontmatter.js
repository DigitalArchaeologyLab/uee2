import React from "react";

function Frontmatter(props) {
  return (
    <span>
      <h2>
        {props.title_eng}
        <p id="arabic">{props.title_ar}</p>
      </h2>
      {props.author}
      <p></p>
      {props.abstract_eng}
      <p id="arabic">{props.abstract_ar}</p>
    </span>
  );
}

export default Frontmatter;
