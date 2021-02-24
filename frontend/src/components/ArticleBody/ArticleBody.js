import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm';
// import footnotes from 'remark-footnotes';

function ArticleBody(props) {
  return (
  <ReactMarkdown plugins={[gfm]}>
    {props.body}
  </ReactMarkdown>
  );
}

export default ArticleBody;
