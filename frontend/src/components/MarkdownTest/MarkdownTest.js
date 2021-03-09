import React from "react";
import MarkdownFromFile from '!babel-loader!@mdx-js/loader!./test.md';

function MarkdownTest(props) {
  return (
  <div className='articleBody'>
    <MarkdownFromFile />;
  </div>
  )
}

export default MarkdownTest;