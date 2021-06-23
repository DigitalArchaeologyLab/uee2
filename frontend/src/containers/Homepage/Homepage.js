import React from "react";
import { Link } from "react-router-dom";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="header__logo">
            <img
              src={process.env.PUBLIC_URL + "/uee_logo.png"}
              alt="UEE logo"
            />
          </div>
          <div className="header__nav">
            <div className="header__socials">
              <img
                className="header__icon"
                src={process.env.PUBLIC_URL + "/twitter.svg"}
                width="20px"
                alt="Twitter logo"
              />
              <img
                className="header__icon"
                src={process.env.PUBLIC_URL + "/facebook.svg"}
                width="20px"
                alt="Facebook logo"
              />
              <img
                className="header__icon"
                src={process.env.PUBLIC_URL + "/uee_donate.png"}
                width="75px"
                alt="Donate"
              />
            </div>
          </div>
        </div>

        <div className="navigation">
          <Link className="nav__item" to="/">
            Home
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
                    process.env.PUBLIC_URL + "/subjects/natural_environment.svg"
                  }
                  alt="Natural Environment"
                />
                <h4>Natural Environment</h4>
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
