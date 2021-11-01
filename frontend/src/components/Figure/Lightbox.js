import React, { useEffect } from "react";
import "./Lightbox.css";
import axios from 'axios';


function Lightbox(props) {

  // useEffect(() => {
  //   // check if IIIF manifest is returned
  //   async function getIIIFValidation() {
  //     try {
  //       const response = await axios.get(`https://iiif.io/api/presentation/validator/service/validate?format=json&version=2.0&url=${https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz001dzmd4/manifest}`);
        
  //       // check if 404
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  //   getIIIFValidation();
  // }, []);
 
    

  useEffect(() => {
    // Get the modal
    var modal = document.getElementById("figureModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("figureImg");
    var modalImg = document.getElementById("modalFigureImg");
    var captionText = document.getElementById("figureCaption");
    img.onclick = function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    };

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };
  });

  return (
    <div>
      <img
        id="figureImg"
        src={process.env.PUBLIC_URL + "/elephantine_example.png"}
        alt="Elephantine"
      />

      <div id="figureModal" class="modal">
        <span class="close">&times;</span>
        <img class="modal-content" id="modalFigureImg" />
        <div id="figureCaption"></div>
      </div>
    </div>
  );
}

export default Lightbox;
