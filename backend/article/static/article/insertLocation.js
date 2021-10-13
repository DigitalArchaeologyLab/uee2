function tagLocation() {
  // Get the modal
  var modal = document.getElementById("tagLocationModal");

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

async function getLocations() {
  const response = await axios.get("/api/locations/");
  const locationsObj = await response.data;
  let locations = [];
  await locationsObj.map((location) => {
    locations.push(`${location.name_eng}`);
  });
  return locations;
}

function prepLocationSelectOptions() {
  getLocations().then((elements) => {
    let select = document.getElementById("id_locations_modal");
    for (let el of elements) {
      let option = document.createElement("option");
      option.text = el;
      option.value = el;
      select.appendChild(option);
    }
  });
}

function insertLocationSelections() {
  // get the text from the article body that has been highlighted
  let selectedText = id_body.value.slice(
    id_body.selectionStart,
    id_body.selectionEnd
  );

  // get full list of locations from selection window
  const locationOptions = document.getElementById("id_locations_modal");
  event.preventDefault();
  // get which location was selected
  const selectedLocation = locationOptions.selectedIndex;
  // embed tag with appropriate location id
  id_body.setRangeText(
    `<span class="taggedLocation" id="${selectedLocation}">${selectedText}</span>`
  );

  // add the tagged location to the locations field so that we can connect the article to these locations on the timemap
  const locationField = document.getElementById("id_location");
  const locationFieldOptions = locationField.options;
  const selectedLocationName = locationOptions.selectedOptions[0].value;
  for (i = 0; i < locationFieldOptions.length; i++) {
    if (selectedLocationName == locationFieldOptions[i].text) {
      locationFieldOptions[i].selected = true;
    }
  }

  var modal = document.getElementById("tagLocationModal");
  modal.style.display = "none";
}
