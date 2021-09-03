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

function prepSelectOptions() {
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

function insertSelections() {
  let selectedText = id_body.value.slice(
    id_body.selectionStart,
    id_body.selectionEnd
  );

  const selectedLocations = document.getElementById("id_locations_modal");
  event.preventDefault();
  // show the selected index
  const selectedValues = [].filter
    .call(selectedLocations.options, (option) => option.selected)
    .map((option) => option.text);
  const selections = selectedValues.join("; ");

  id_body.setRangeText(
    `<Tooltip title="${selections}" classes={tooltip} interactive arrow >${selectedText}</Tooltip>`
  );

  // add any tagged locations to the locations field so that we can connect the article to these locations on the timemap
  const locationField = document.getElementById("id_location");
  const locationOptions = locationField.options;
  selectedValues.forEach((selectedValue) => {
    for (i = 0; i < locationOptions.length; i++) {
      if (selectedValue == locationOptions[i].text) {
        locationOptions[i].selected = true;
      }
    }
  });

  var modal = document.getElementById("tagLocationModal");
  modal.style.display = "none";
}
