import React, { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
import marked from "marked";
import axios from "axios";

import "./ArticleBody.css";

function ArticleBody(props) {
  // TODO: add logic to loop through all tags
  useEffect(() => {
    // parse tagged Terms
    if (document.querySelector("span.taggedTerm") == null) {
      return;
    }
    const tag = document.querySelector("span.taggedTerm");
    const termId = tag.id;

    async function getTerm() {
      try {
        const response = await axios.get(`/api/terms/${termId}`);
        props.setSelectedTerm(response.data);
      } catch (err) {
        console.error(err);
      }
    }

    getTerm();
    tag.addEventListener("click", props.toggleDrawer("right", true));

    // parse embedded Images
    if (document.querySelector("img.embeddedImage") == null) {
      return;
    }
    const image = document.querySelector("img.embeddedImage");
    const imageArkID = image.id;

    image.addEventListener("click", function () {
      alert(imageArkID);
    });
  }, [props.body]);

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
