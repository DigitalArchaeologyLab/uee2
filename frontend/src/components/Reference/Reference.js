import React from "react";
import "./Reference.css";

function Reference(props) {
  return (
    <div className="ref">
      <div className="ref__author">
        <p>
          <strong>{props.author}</strong>
        </p>
      </div>
      <div className="ref__entry">
        <div className="ref__year">{props.year}</div>
        <div className="ref__info">
          <div className="ref__info__text">
            {props.text}
          </div>
          <div className="ref__info__url">
            <a href={props.url}>
              {props.url}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reference;
