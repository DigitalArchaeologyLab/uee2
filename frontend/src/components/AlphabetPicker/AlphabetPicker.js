import { latinAlphabet } from "../../utils/alphabets";
import { arabicAlphabet } from "../../utils/alphabets";
import "./AlphabetPicker.css";

function AlphabetPicker(props) {
  function handleLetterSelection(e) {
    e.preventDefault();
    props.setSelectedLetter(e.target.innerText);

    let selectedLetterButton = document.querySelector(".selectedLetterButton");
    if (selectedLetterButton !== null) {
      selectedLetterButton.classList.remove("selectedLetterButton");
    }
    e.target.classList.add("selectedLetterButton");
  }

  let alphabet = latinAlphabet;

  if (props.alphabet === "latinAlphabet") {
    alphabet = latinAlphabet;
  } else {
    alphabet = arabicAlphabet;
  }

  return (
    <div>
      <ul className="alphabetList">
        {alphabet.map((letter) => (
          <li key={letter}>
            <button onClick={handleLetterSelection}>{letter}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlphabetPicker;
