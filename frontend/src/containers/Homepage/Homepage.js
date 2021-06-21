import React, { Component } from "react";
import { Link } from "react-router-dom";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="header__logo">
            <img src={process.env.PUBLIC_URL + "/uee_logo.png"} />
          </div>
          <div className="header__socials">
            <img src={process.env.PUBLIC_URL + "/twitter.svg"} />
            <img src={process.env.PUBLIC_URL + "/facebook.svg"} />
            <img
              src={process.env.PUBLIC_URL + "/uee_donate.png"}
              width="75px"
            />
          </div>
        </div>
        <div className="body">
          <h1>Welcome to the UCLA Encyclopedia of Egyptology</h1>
          <div className="body__tagline">
            <p>
              The UCLA Encyclopedia of Egyptology is an international
              cooperative project to provide high quality peer reviewed
              information on ancient Egypt. It is a resource in development and
              will grow steadily.
            </p>
          </div>
          {/* <div className="body__subjects">
            <img src={process.env.PUBLIC_URL + "/domains.png"} />
          </div> */}
          <div className="body__tiles">
            <div className="body__tiles_title">
              <Link to="/articles">
                <p>Browse the subjects</p>
                <img src={process.env.PUBLIC_URL + "/timemap.png"} />
              </Link>
            </div>
            <div className="body__tiles_title">
              <Link to="/articles">
                <p>Explore the time map</p>
                <img src={process.env.PUBLIC_URL + "/timemap.png"} />
              </Link>
            </div>
            <div className="body__tiles_title">
              <Link to="/articles">
                <p>View the articles</p>
                <img src={process.env.PUBLIC_URL + "/timemap.png"} />
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
              />
            </div>
          </div>
          <div className="footer__copyright">
            <div className="copyright">
              <div className="copyright">
                <p>© Copyright UC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
