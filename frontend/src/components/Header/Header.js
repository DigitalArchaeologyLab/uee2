import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <Link className="header__logo" to="/">
          <img
            src={process.env.PUBLIC_URL + "/logos/uee_logo.png"}
            alt="UEE logo"
          />
        </Link>
      </div>
      <div className="header__nav">
        <div className="navigation">
          <Link className="nav__item" to="/about">
            About
          </Link>
          <Link className="nav__item" to="/subjects">
            Subjects
          </Link>
          <Link className="nav__item" to="/articles">
            Articles
          </Link>
          <Link className="nav__item" to="/timemap">
            Time Map
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
