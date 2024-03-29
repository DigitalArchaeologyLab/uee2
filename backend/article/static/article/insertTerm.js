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

let allTerms = [];

async function getTermNames() {
  const response = await axios.get("/api/terms/");
  const termsObj = await response.data;
  return termsObj;
}

function prepTermSelectOptions() {
  getTermNames().then((terms) => {
    allTerms = terms;
    let select = document.getElementById("id_terms_modal");
    for (let term of terms) {
      let option = document.createElement("option");
      option.text = term.term_eng;
      option.value = term.term_eng;
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
  const selectedTerm = termOptions.selectedOptions[0].innerHTML;
  selectedTermObj = allTerms.find((term) => term.term_eng === selectedTerm);
  // embed tag with appropriate term id
  id_body.setRangeText(
    `<span class="taggedTerm" id="${selectedTermObj.id}">${selectedText}</span>`
  );

  var modal = document.getElementById("tagTermModal");
  modal.style.display = "none";
}
