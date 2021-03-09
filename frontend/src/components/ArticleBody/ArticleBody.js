import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
// import footnotes from 'remark-footnotes';

function ArticleBody(props) {
  return (
  <div className='articleBody'>
    <ReactMarkdown plugins={[gfm]}>{props.body}</ReactMarkdown>;
  </div>
  )
}

export default ArticleBody;
