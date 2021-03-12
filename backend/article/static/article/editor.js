function fromFile() {
  alert("I am an alert box!");
}

function addCitation() {
  if (id_body.selectionStart == id_body.selectionEnd) {
    return; // because nothing is selected
  }

  let selected = id_body.value.slice(
    id_body.selectionStart,
    id_body.selectionEnd
  );
  id_body.setRangeText(
    `<Tooltip title="I am Queen of the DOM" classes={tooltip} interactive arrow >${selected}</Tooltip>`
  );
  return false;
}
