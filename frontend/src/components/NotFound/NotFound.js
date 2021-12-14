import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./NotFound.css";

function NotFound(props) {
  return (
    <div>
      <Header />
      <div className="notfound">
        <h1>Not found</h1>
        <p>The page you requested could not be found.</p>
        <br></br>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
