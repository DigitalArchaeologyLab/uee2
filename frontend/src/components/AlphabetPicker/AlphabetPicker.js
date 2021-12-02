import { latinAlphabet } from "../../utils/alphabets";
import { arabicAlphabet } from "../../utils/alphabets";
import "./AlphabetPicker.css";
import { useLayoutEffect } from "react";

function AlphabetPicker(props) {
  function handleLetterSelection(e) {
    e.preventDefault();
    props.setSelectedLetter(e.target.innerText);
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
