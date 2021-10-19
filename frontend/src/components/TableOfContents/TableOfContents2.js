import React, { useEffect } from "react";
import "./TableOfContents.css";

function TableOfContents2(props) {
  // const [tocTree, setTocTree] = useState([
  //   {
  //     name_eng: "Table of Contents",
  //     path: "0000",
  //     depth: 0,
  //     numchild: 0,
  //   },
  // ]);

  useEffect(() => {
    if (document.querySelectorAll("h2", "h3", "h4", "h5", "h6") == null) {
      return;
    }
    const headers = document.querySelectorAll("h2", "h3", "h4", "h5", "h6");

    // for (i = 0; i < headers.length(); i++) {
    //   const header = headers[i]
    //   const headerTag = document.createElement('a')
    //   headerTag.setAttribute('href', `#${header.innerText}`)
    //  toc[i].appendChild(headerTag)
    // })
  });

  return (
    <div className="tableofcontents">
      <div className="hamburgerline"></div>
      <div className="hamburgerline"></div>
      <div className="hamburgerline"></div>
      <ul>
        <li>
          <a href="#introduction">Intro</a>
        </li>
        <li>
          <a href="#the-earlier-sanctuary">The Earlier Sanctuary</a>
        </li>
        <li>
          <a href="#table">Table</a>
        </li>

        <li>
          <a href="#the-later-sanctuary">The Later Sanctuary</a>
        </li>
        <ul>
          <li>
            <a href="#figure">Figure</a>
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default TableOfContents2;
