import React from "react";
import Markdown from "markdown-to-jsx";

function ArticleBody(props) {
  return (
  <div className='articleBody'>
    <Markdown children={props.body} />
  </div>
  )
}

export default ArticleBody;
