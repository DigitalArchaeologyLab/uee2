import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./IFrameTest.css";

function IFrameTest(props) {
  return (
    <div>
      <Header />
      <div className="iiif-iframe">
        <iframe src="http://localhost/iiif-image" width="95%" height="800px" />
      </div>
      <Footer />
    </div>
  );
}

export default IFrameTest;
