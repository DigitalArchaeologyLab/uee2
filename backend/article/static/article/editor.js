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

function addTerm() {
  // Get the modal
  var modal = document.getElementById("addTermModal");

  // Get the button that opens the modal
  var btn = document.getElementById("addTermButton");

  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  };

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

async function getTerms() {
  const response = await axios.get("http://localhost:8000/api/keywords/");
  const keywordsObj = await response.data;
  let keywords = [];
  await keywordsObj.map((keyword) => {
    keywords.push(`${keyword.name_eng}, ${keyword.name_ar}`);
  });
  return keywords;
}

function prepSelectOptions() {
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

function insertSelections() {
  let selectedText = id_body.value.slice(
    id_body.selectionStart,
    id_body.selectionEnd
  );

  const btn = document.getElementById("insert");
  const selectedKeywords = document.getElementById("id_terms_modal");
  btn.onclick = (event) => {
    event.preventDefault();
    // show the selected index
    const selectedValues = [].filter
      .call(selectedKeywords.options, (option) => option.selected)
      .map((option) => option.text);
    const selections = selectedValues.join("; ");

    id_body.setRangeText(
      `<Tooltip title="${selections}" classes={tooltip} interactive arrow >${selectedText}</Tooltip>`
    );
    var modal = document.getElementById("addTermModal");
    modal.style.display = "none";
  };
}
