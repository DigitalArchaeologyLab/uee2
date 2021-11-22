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
