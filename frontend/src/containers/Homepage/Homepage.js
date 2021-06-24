import React from "react";
import { Link } from "react-router-dom";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="header__logo">
            <Link className="header__logo" to='/'><img
              src={process.env.PUBLIC_URL + "/logos/uee_logo.png"}
              alt="UEE logo"
            /></Link>
          </div>
          <div className="header__nav">
            <div className="navigation">
          <Link className="nav__item" to="/about">
            About
          </Link>
          <Link className="nav__item" to="/subjects">
            Browse Subjects
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

        <div className="body">
          <div className="welcome">
            <h1>Welcome to the UCLA Encyclopedia of Egyptology</h1>
            <div className="welcome__tagline">
              <p>
                The UCLA Encyclopedia of Egyptology is an international
                cooperative project to provide high quality peer reviewed
                information on ancient Egypt. It is a resource in development
                and will grow steadily.
              </p>
            </div>
          </div>

          <div className="subjects">
            <div className="subjects__container">
              <div className="subject">
                <img
                  className="subject__thumbnail"
                  src={
                    process.env.PUBLIC_URL + "/subjects/natural_environment.svg"
                  }
                  alt="Natural Environment"
                />
                <h4>Natural Environment</h4>
              </div>
              <div className="subject">
                <img
                  className="subject__thumbnail"
                  src={
                    process.env.PUBLIC_URL + "/subjects/individual.svg"
                  }
                  alt="Individual and Society"
                />
                <h4>Individual and Society</h4>
              </div>
              <div className="subject">
                <img
                  className="subject__thumbnail"
                  src={
                    process.env.PUBLIC_URL + "/subjects/geography.png"
                  }
                  alt="Geography"
                />
                <h4>Geography</h4>
              </div>
              <div className="subject">
                <img
                  className="subject__thumbnail"
                  src={
                    process.env.PUBLIC_URL + "/subjects/language.svg"
                  }
                  alt="Language, Text and Writing"
                />
                <h4>Language, Text and Writing</h4>
              </div>
              <div className="subject">
                <img
                  className="subject__thumbnail"
                  src={
                    process.env.PUBLIC_URL + "/subjects/time.png"
                  }
                  alt="Time and History"
                />
                <h4>Time and History</h4>
              </div>
              <div className="subject">
                <img
                  className="subject__thumbnail"
                  src={
                    process.env.PUBLIC_URL + "/subjects/material.svg"
                  }
                  alt="Material Culture, Art and Architecture"
                />
                <h4>Material Culture, Art and Architecture</h4>
              </div>
              <div className="subject">
                <img
                  className="subject__thumbnail"
                  src={
                    process.env.PUBLIC_URL + "/subjects/nubia.png"
                  }
                  alt="Nubia"
                />
                <h4>Nubia</h4>
              </div>
              <div className="subject">
                <img
                  className="subject__thumbnail"
                  src={
                    process.env.PUBLIC_URL + "/subjects/domains.svg"
                  }
                  alt="Domains of Knowledge"
                />
                <h4>Domains of Knowledge</h4>
              </div>
              <div className="subject">
                <img
                  className="subject__thumbnail"
                  src={
                    process.env.PUBLIC_URL + "/subjects/religion.svg"
                  }
                  alt="Religion"
                />
                <h4>Religion</h4>
              </div>
              <div className="subject">
                <img
                  className="subject__thumbnail"
                  src={
                    process.env.PUBLIC_URL + "/subjects/egyptology.svg"
                  }
                  alt="Egyptology"
                />
                <h4>Egyptology</h4>
              </div>
              <div className="subject">
                <img
                  className="subject__thumbnail"
                  src={
                    process.env.PUBLIC_URL + "/subjects/economy.png"
                  }
                  alt="Economy"
                />
                <h4>Economy</h4>
              </div>
            </div>
          </div>
          <div className="tiles">
            <div className="tiles_title">
              <Link to="/articles">
                <p>Browse the subjects</p>
                <img
                  src={process.env.PUBLIC_URL + "/timemap.png"}
                  alt="browse"
                />
              </Link>
            </div>
            <div className="tiles_title">
              <Link to="/articles">
                <p>Explore the time map</p>
                <img
                  src={process.env.PUBLIC_URL + "/timemap.png"}
                  alt="timemap"
                />
              </Link>
            </div>
            <div className="tiles_title">
              <Link to="/articles">
                <p>View the articles</p>
                <img
                  src={process.env.PUBLIC_URL + "/timemap.png"}
                  alt="articles"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer__cols">
            <div className="footer__1">
              <h4>Editorial Information</h4>
              <ul>
                <li>About the UEE</li>
                <li>Editors and Staff</li>
                <li>The Authors</li>
                <li>Citing the UEE</li>
                <li>Guide to Publishing</li>
              </ul>
            </div>
            <div className="footer__2">
              <h4>Information for Authors</h4>
              <ul>
                <li>Submission and Style Guide</li>
                <li>Preferred Spelling</li>
                <li>Preferred Chronology</li>
              </ul>
            </div>
            <div className="footer__3">
              <h4>Search the UEE</h4>
              <ul>
                <li>Subject Browse</li>
                <li>Title Index</li>
                <li>Time Map</li>
              </ul>
            </div>
            <div className="footer__4">
              <h4>Related Links</h4>
              <ul>
                <li>UCLA</li>
                <li>UEE eScholarship Repository</li>
                <li>AEGARON</li>
                <li>Digital Karnak</li>
              </ul>
            </div>
            <div className="footer__5">
              <p>
                This project is made possible through generous support from the
              </p>
              <img
                src={process.env.PUBLIC_URL + "/neh_white.png"}
                width="200px"
                alt="NEH logo"
              />
              
            </div>
          </div>
          <div className="footer__copyright">

          <div className="connected">
            <div className="connected__icons">
            <a href="linktofacebook">
               <img
                className="connected__icon"
                src={process.env.PUBLIC_URL + "/logos/twitter.svg"}
                width="25px"
                alt="Twitter logo"
              />
              </a>
              <a href="linktofacebook">
              <img
                className="connected__icon"
                src={process.env.PUBLIC_URL + "/logos/facebook.svg"}
                width="23px"
                alt="Facebook logo"
              />
              </a>
              </div>

          </div>
            <div className="copyright">
              <div className="copyright">
                <p>© Copyright UC Regents</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
