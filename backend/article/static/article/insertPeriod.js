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

let allPeriods = [];

async function getPeriods() {
  const response = await axios.get("/api/periods/");
  const periodsObj = await response.data;
  return periodsObj;
  // let periods = [];
  // await periodsObj.map((period) => {
  //   periods.push(`${period.name_eng}`);
  // });
  // return periods;
}

function prepPeriodSelectOptions() {
  getPeriods().then((periods) => {
    allPeriods = periods;
    let select = document.getElementById("id_periods_modal");
    for (let period of periods) {
      let option = document.createElement("option");
      option.text =
        period.name_eng + " (" + period.start + " - " + period.end + ")";
      option.value = period.name_eng;
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
  // get which option was selected
  const selectedPeriod = periodOptions.selectedOptions[0].value;
  selectedPeriodObj = allPeriods.find(
    (period) => period.name_eng === selectedPeriod
  );
  // embed tag with appropriate period id
  id_body.setRangeText(
    `<span class="taggedPeriod" id="${selectedPeriodObj.id}">${selectedText}</span>`
  );

  // add the tagged period to the periods field so that we can connect the article to these periods on the timemap
  const periodField = document.getElementById("id_period");
  const periodFieldOptions = periodField.options;
  for (i = 0; i < periodFieldOptions.length; i++) {
    if (selectedPeriodObj.id == periodFieldOptions[i].value) {
      periodFieldOptions[i].selected = true;
    }
  }

  var modal = document.getElementById("tagPeriodModal");
  modal.style.display = "none";
}
