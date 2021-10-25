import React from "react";
import "./IIIFImageIFrame.css";

function IIIFImageIFrame(props) {
  return (
    <div>
      <div className="iiif-iframe">
        <iframe src="http://localhost/iiif-image" width="100%" height="100%" />
      </div>
    </div>
  );
}

export default IIIFImageIFrame;
