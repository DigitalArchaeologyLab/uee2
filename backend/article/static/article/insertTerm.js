function tagTerm() {
  // Get the modal
  var modal = document.getElementById("tagTermModal");

  // Open the modal
  modal.style.display = "block";

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("closeTermModal")[0];

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

async function getTerms() {
  const response = await axios.get("/api/terms/");
  const termsObj = await response.data;
  let terms = [];
  await termsObj.map((term) => {
    terms.push(`${term.name_eng}`);
  });
  return terms;
}

function prepTermSelectOptions() {
  getTerms().then((elements) => {
    let select = document.getElementById("id_terms_modal");
    for (let el of elements) {
      let option = document.createElement("option");
      option.text = el;
      option.value = el;
      select.appendChild(option);
    }
  });
}

function insertTermSelections() {
  let selectedText = id_body.value.slice(
    id_body.selectionStart,
    id_body.selectionEnd
  );

  // get full list of terms from selection window
  const termOptions = document.getElementById("id_terms_modal");
  event.preventDefault();
  // get which term was selected
  const selectedTerm = termOptions.selectedIndex;
  // embed tag with appropriate term id
  id_body.setRangeText(
    `<span class="taggedTerm" id="${selectedTerm}">${selectedText}</span>`
  );

  var modal = document.getElementById("tagTermModal");
  modal.style.display = "none";
}
