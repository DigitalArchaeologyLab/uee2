import React from "react";
import "./TableOfContents.css";
import { generateTOC } from "./generateTOC";

function TableOfContents(props) {
  return (
    <aside id="tableofcontents" className="tableofcontents">
      {generateTOC()}
    </aside>
  );
}

export default TableOfContents;
