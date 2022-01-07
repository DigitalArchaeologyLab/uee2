import React from "react";
import "./Popup.css";
import ListWithLinks from "../../elements/List/ListWithLinks";

let temp = [
  { name: "Emotions", path: "/article/1" },
  { name: "Late Egyptian", path: "article/2" },
];

function Popup(props) {
  return (
    <div>
      <h3>{props.placeName}</h3>
      <i>Construction</i>
      <ListWithLinks list={temp} class="articlesList" />
    </div>
  );
}

export default Popup;
