function tagPlace() {
  // Get the modal
  var modal = document.getElementById("tagPlaceModal");

  // Open the modal
  modal.style.display = "block";

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

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

async function getPlaces() {
  const response = await axios.get("/api/places/");
  const placesObj = await response.data;
  let places = [];
  await placesObj.map((place) => {
    places.push(`${place.name_eng}`);
  });
  return places;
}

function prepPlaceSelectOptions() {
  getPlaces().then((elements) => {
    let select = document.getElementById("id_places_modal");
    for (let el of elements) {
      let option = document.createElement("option");
      option.text = el;
      option.value = el;
      select.appendChild(option);
    }
  });
}

function insertPlaceSelections() {
  // get the text from the article body that has been highlighted
  let selectedText = id_body.value.slice(
    id_body.selectionStart,
    id_body.selectionEnd
  );

  // get full list of places from selection window
  const placeOptions = document.getElementById("id_places_modal");
  event.preventDefault();
  // get which place was selected
  const selectedPlace = placeOptions.selectedIndex + 1;
  // embed tag with appropriate place id
  id_body.setRangeText(
    `<span class="taggedPlace" id="${selectedPlace}">${selectedText}</span>`
  );

  // add the tagged place to the places field so that we can connect the article to these places on the timemap
  const placeField = document.getElementById("id_place");
  const placeFieldOptions = placeField.options;
  const selectedPlaceName = placeOptions.selectedOptions[0].value;
  for (i = 0; i < placeFieldOptions.length; i++) {
    if (selectedPlaceName == placeFieldOptions[i].text) {
      placeFieldOptions[i].selected = true;
    }
  }

  var modal = document.getElementById("tagPlaceModal");
  modal.style.display = "none";
}
