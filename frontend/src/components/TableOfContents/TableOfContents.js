import React, { useEffect } from "react";
import "./TableOfContents.css";
import { generateTOC } from "./generateTOC";

function TableOfContents(props) {
  let toc = "";

  useEffect(() => {
    toc = generateTOC();
  });

  return (
    <aside id="tableofcontents" className="tableofcontents">
      {toc}
    </aside>
  );
}

export default TableOfContents;
