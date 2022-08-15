function addImage() {
  // Get the modal
  var modal = document.getElementById("addImageModal");

  // Open the modal
  modal.style.display = "block";

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("closeImageModal")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

let allImages = [];

async function getImageTitles() {
  const response = await axios.get("/api/images/");
  const imagesObj = await response.data;
  return imagesObj;
  // let imageTitles = [];
  // await imagesObj.map((image) => {
  //   imageTitles.push(`${image.title_eng}`);
  // });
  // return imageTitles;
}

// async function getImageData(selectedImageTitle) {
//   const response = await axios.get(
//     `/api/imageQuery/?title_eng=${selectedImageTitle}`
//   );
//   const imageData = await response.data;
//   return imageData;
// }

function prepImageSelectOptions() {
  getImageTitles().then((images) => {
    allImages = images;
    let select = document.getElementById("id_images_modal");
    for (let image of images) {
      let option = document.createElement("option");
      option.text = image.title_eng;
      option.value = image.title_eng;
      select.appendChild(option);
    }
  });
}

function insertImageSelections() {
  // get full list of images from selection window
  const imageOptions = document.getElementById("id_images_modal");
  event.preventDefault();
  // get which option was selected
  const selectedImageTitle = imageOptions.selectedOptions[0].innerHTML;
  selectedImageObj = allImages.find(
    (image) => image.title_eng === selectedImageTitle
  );

  // embed tag with appropriate metadata
  id_body.setRangeText(
    `<figure class="embeddedImage__right" >
      <img src="${selectedImageObj.image_file}" id="${selectedImageObj.arkID}" width="300px"/>
      <figcaption>${selectedImageObj.caption}</figcaption>
    </figure>`
  );

  var modal = document.getElementById("addImageModal");
  modal.style.display = "none";
}
