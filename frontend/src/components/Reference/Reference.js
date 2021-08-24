import React from "react";
import "./Reference.css";

function Reference() {
  return (
    <div className="ref">
      <div className="ref__author">
        <p>
          <strong>Lehmann, Manuela</strong>
        </p>
      </div>
      <div className="ref__entry">
        <div className="ref__year">2021</div>
        <div className="ref__info">
          <div className="ref__info__text">
            Tower Houses. UCLA Encyclopedia of Egyptology, 1(1).
          </div>
          <div className="ref__info__url">
            <a href="https://escholarship.org/uc/item/6c57f675">
              https://escholarship.org/uc/item/6c57f675
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reference;
