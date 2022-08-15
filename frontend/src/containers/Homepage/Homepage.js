import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Homepage.css";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <main className="home">
          <div className="welcome">
            <h1>Welcome to {process.env.REACT_APP_SITE_NAME}</h1>
            <div className="welcome__tagline">
              <p>
              {process.env.REACT_APP_SITE_NAME} is an international
                cooperative project to provide high quality peer reviewed
                information on ancient Egypt. It is a resource in development
                and will grow steadily.
              </p>
            </div>
          </div>

          <div className="subjects">
            <div className="subjects__container">
              <div className="subject">
                <Link to="/subjects/naturalenvironment">
                  <img
                    className="subject__thumbnail"
                    src={
                      process.env.PUBLIC_URL +
                      "/subjects/natural_environment.svg"
                    }
                    alt="Natural Environment"
                  />
                </Link>
                <Link to="/subjects/naturalenvironment">
                  <h4>Natural Environment</h4>
                </Link>
              </div>
              <div className="subject">
                <Link to="/subjects/individual">
                  <img
                    className="subject__thumbnail"
                    src={process.env.PUBLIC_URL + "/subjects/individual.svg"}
                    alt="Individual and Society"
                  />
                </Link>
                <Link to="/subjects/individual">
                  <h4>Individual and Society</h4>
                </Link>
              </div>
              <div className="subject">
                <Link to="/subjects/geography">
                  <img
                    className="subject__thumbnail"
                    src={process.env.PUBLIC_URL + "/subjects/geography.png"}
                    alt="Geography"
                  />
                </Link>
                <Link to="/subjects/geography">
                  <h4>Geography</h4>
                </Link>
              </div>
              <div className="subject">
                <Link to="/subjects/language">
                  <img
                    className="subject__thumbnail"
                    src={process.env.PUBLIC_URL + "/subjects/language.svg"}
                    alt="Language, Text and Writing"
                  />
                </Link>
                <Link to="/subjects/language">
                  <h4>Language, Text and Writing</h4>
                </Link>
              </div>
              <div className="subject">
                <Link to="/subjects/time">
                  <img
                    className="subject__thumbnail"
                    src={process.env.PUBLIC_URL + "/subjects/time.png"}
                    alt="Time and History"
                  />
                </Link>
                <Link to="/subjects/time">
                  <h4>Time and History</h4>
                </Link>
              </div>
              <div className="subject">
                <Link to="/subjects/material">
                  <img
                    className="subject__thumbnail"
                    src={process.env.PUBLIC_URL + "/subjects/material.svg"}
                    alt="Material Culture, Art and Architecture"
                  />
                </Link>
                <Link to="/subjects/material">
                  <h4>Material Culture, Art and Architecture</h4>
                </Link>
              </div>
              <div className="subject">
                <Link to="/subjects/nubia">
                  <img
                    className="subject__thumbnail"
                    src={process.env.PUBLIC_URL + "/subjects/nubia.png"}
                    alt="Nubia"
                  />
                </Link>
                <Link to="/subjects/nubia">
                  <h4>Nubia</h4>
                </Link>
              </div>
              <div className="subject">
                <Link to="/subjects/domains">
                  <img
                    className="subject__thumbnail"
                    src={process.env.PUBLIC_URL + "/subjects/domains.svg"}
                    alt="Domains of Knowledge"
                  />
                </Link>
                <Link to="/subjects/domains">
                  <h4>Domains of Knowledge</h4>
                </Link>
              </div>
              <div className="subject">
                <Link to="/subjects/religion">
                  <img
                    className="subject__thumbnail"
                    src={process.env.PUBLIC_URL + "/subjects/religion.svg"}
                    alt="Religion"
                  />
                </Link>
                <Link to="/subjects/religion">
                  <h4>Religion</h4>
                </Link>
              </div>
              <div className="subject">
                <Link to="/subjects/egyptology">
                  <img
                    className="subject__thumbnail"
                    src={process.env.PUBLIC_URL + "/subjects/egyptology.svg"}
                    alt="Egyptology"
                  />
                </Link>
                <Link to="/subjects/egyptology">
                  <h4>Egyptology</h4>
                </Link>
              </div>
              <div className="subject">
                <Link to="/subjects/economy">
                  <img
                    className="subject__thumbnail"
                    src={process.env.PUBLIC_URL + "/subjects/economy.png"}
                    alt="Economy"
                  />
                </Link>
                <Link to="/subjects/economy">
                  <h4>Economy</h4>
                </Link>
              </div>
            </div>
          </div>
          <div className="tiles">
            <figure>
              <Link to="/articles">
                <figcaption>Browse the subjects</figcaption>
                <img
                  src={process.env.PUBLIC_URL + "/timemap.png"}
                  alt="browse"
                />
              </Link>
            </figure>
            <figure>
              <Link to="/articles">
                <figcaption>Explore the time map</figcaption>
                <img
                  src={process.env.PUBLIC_URL + "/timemap.png"}
                  alt="timemap"
                />
              </Link>
            </figure>
            <figure>
              <Link to="/articles">
                <figcaption>View the articles</figcaption>
                <img
                  src={process.env.PUBLIC_URL + "/timemap.png"}
                  alt="articles"
                />
              </Link>
            </figure>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Homepage;
