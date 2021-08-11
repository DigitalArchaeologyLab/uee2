// function addTerm() {
//   if (id_body.selectionStart == id_body.selectionEnd) {
//     return; // because nothing is selected
//   }

//   let selected = id_body.value.slice(
//     id_body.selectionStart,
//     id_body.selectionEnd
//   );

//   id_body.setRangeText(
//     `<Tooltip title="Insert definition from database" classes={tooltip} interactive arrow >${selected}</Tooltip>`
//   );
//   return false;
// }

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
  console.log(selectedValues);
  const selections = selectedValues.join("; ");

  id_body.setRangeText(
    `<Tooltip title="${selections}" classes={tooltip} interactive arrow >${selectedText}</Tooltip>`
  );
  var modal = document.getElementById("tagLocationModal");
  modal.style.display = "none";
}

// add any tagged locations to an array (transient_tagged_locations) that can be used for connecting articles to the map
