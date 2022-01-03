import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer_all">
        <div className="footer__cols">
          <div className="footer__1">
            <h4>Editorial Information</h4>
            <ul>
              <li><a href="/about">About the UEE</a></li>
              <li><a href="/about/editors">Editors and Staff</a></li>
              <li><a href="/about/authors">The Authors</a></li>
              <li><a href="/about/citing">Citing the UEE</a></li>
              <li><a href="/about/guide">Guide to Publishing</a></li>
            </ul>
          </div>
          <div className="footer__2">
            <h4>Information for Authors</h4>
            <ul>
              <li><a href="/about/style-guide">Submission and Style Guide</a></li>
              <li><a href="/about/spelling">Preferred Spelling</a></li>
              <li><a href="/about/chronology">Preferred Chronology</a></li>
            </ul>
          </div>
          <div className="footer__3">
            <h4>Search the UEE</h4>
            <ul>
              <li><a href="/subjects">Subject Browse</a></li>
              <li><a href="/articles">Title Index</a></li>
              <li><a href="/timemap">Time Map</a></li>
            </ul>
          </div>
          <div className="footer__4">
            <h4>Related Links</h4>
            <ul>
              <li><a href="https://ucla.edu">UCLA</a></li>
              <li><a href="http://escholarship.org/uc/nelc_uee">UEE eScholarship Repository</a></li>
              <li><a href="http://drupaldev.aegaron.ucla.edu/">AEGARON</a></li>
              <li><a href="http://dlib.etc.ucla.edu/projects/Karnak/">Digital Karnak</a></li>
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
              <Link to="linktofacebook">
                <img
                  className="connected__icon"
                  src={process.env.PUBLIC_URL + "/logos/twitter.svg"}
                  width="25px"
                  alt="Twitter logo"
                />
              </Link>
              <Link to="linktofacebook">
                <img
                  className="connected__icon"
                  src={process.env.PUBLIC_URL + "/logos/facebook.svg"}
                  width="23px"
                  alt="Facebook logo"
                />
              </Link>
            </div>
          </div>
          <div className="copyright">
            <div className="copyright">
              <p>© Copyright UC Regents</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
