import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import IIIFImage from "./IIIFImage";

function ImageRecord(props) {
  return (
    <div>
      <IIIFImage />
      {/* <iframe
        title="Mirador"
        width="100%"
        height="450"
        src="./iFrameTest.html"
      ></iframe> */}
    </div>
  );
}

export default ImageRecord;
