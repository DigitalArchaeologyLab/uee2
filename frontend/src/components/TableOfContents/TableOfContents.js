import React from "react";
import "./TableOfContents.css";

function TableOfContents(props) {
  return (
    <div className="tableofcontents">
      <div className="hamburgerline"></div>
      <div className="hamburgerline"></div>
      <div className="hamburgerline"></div>
      <ul>
        <li><a href="#introduction">Intro</a></li>
        <li><a href="#format">Format</a></li>
        <ul>
        <li><a href="#table">Table</a></li>
        <li><a href="#image">Image</a></li>
        </ul>
      </ul>
    </div>
  );
}

export default TableOfContents;
