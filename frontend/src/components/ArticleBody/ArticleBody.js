import React, { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
import marked from "marked";

import "./ArticleBody.css";

function ArticleBody(props) {
  useEffect(() => {
    if (document.querySelector("span.taggedLocation") == null) {
      return;
    }
    document
      .querySelector("span.taggedLocation")
      .addEventListener("click", function () {
        alert("query and insert definition/details");
      });
  });

  const getMarkdownText = () => {
    var rawMarkup = marked(props.body);
    // run through a sanitizer (rec: DOMPurify)
    return { __html: rawMarkup };
  };

  return (
    <div className="articleBody">
      {/* <Markdown children={props.body} />*/}
      <div dangerouslySetInnerHTML={getMarkdownText()} />
    </div>
  );
}

export default ArticleBody;
