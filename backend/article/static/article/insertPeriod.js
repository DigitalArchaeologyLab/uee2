function tagPeriod() {
  // Get the modal
  var modal = document.getElementById("tagPeriodModal");

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

async function getPeriods() {
  const response = await axios.get("/api/periods/");
  const periodsObj = await response.data;
  let periods = [];
  await periodsObj.map((period) => {
    periods.push(`${period.name_eng}`);
  });
  return periods;
}

function prepPeriodSelectOptions() {
  getPeriods().then((elements) => {
    let select = document.getElementById("id_periods_modal");
    for (let el of elements) {
      let option = document.createElement("option");
      option.text = el;
      option.value = el;
      select.appendChild(option);
    }
  });
}

function insertPeriodSelections() {
  // get the text from the article body that has been highlighted
  let selectedText = id_body.value.slice(
    id_body.selectionStart,
    id_body.selectionEnd
  );

  // get full list of periods from selection window
  const periodOptions = document.getElementById("id_periods_modal");
  event.preventDefault();
  // get which period was selected
  const selectedPeriod = periodOptions.selectedIndex + 1;
  // embed tag with appropriate period id
  id_body.setRangeText(
    `<span class="taggedPeriod" id="${selectedPeriod}">${selectedText}</span>`
  );

  // add the tagged period to the periods field so that we can connect the article to these periods on the timemap
  const periodField = document.getElementById("id_period");
  const periodFieldOptions = periodField.options;
  const selectedPeriodName = periodOptions.selectedOptions[0].value;
  for (i = 0; i < periodFieldOptions.length; i++) {
    if (selectedPeriodName == periodFieldOptions[i].text) {
      periodFieldOptions[i].selected = true;
    }
  }

  var modal = document.getElementById("tagPeriodModal");
  modal.style.display = "none";
}
