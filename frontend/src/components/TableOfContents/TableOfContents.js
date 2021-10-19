import React from "react";
import "./TableOfContents.css";
import { generateTOC } from "./generateTOC";

function TableOfContents(props) {
  const toc = generateTOC();

  return (
    <aside id="tableofcontents" className="tableofcontents">
      {toc}
    </aside>
  );
}

export default TableOfContents;
