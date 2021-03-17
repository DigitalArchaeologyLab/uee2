function addTerm() {
  if (id_body.selectionStart == id_body.selectionEnd) {
    return; // because nothing is selected
  }

  let selected = id_body.value.slice(
    id_body.selectionStart,
    id_body.selectionEnd
  );

  // add modal, get keywords from api, display as a select list, pass selected value + definition to Tooltip

  id_body.setRangeText(
    `<Tooltip title="Insert definition from database" classes={tooltip} interactive arrow >${selected}</Tooltip>`
  );
  return false;
}

function testModal() {
  // if (id_body.selectionStart == id_body.selectionEnd) {
  //   return; // because nothing is selected
  // }

  // let selected = id_body.value.slice(
  //   id_body.selectionStart,
  //   id_body.selectionEnd
  // );

  // Get the modal
  var modal = document.getElementById("testModal");

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

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
