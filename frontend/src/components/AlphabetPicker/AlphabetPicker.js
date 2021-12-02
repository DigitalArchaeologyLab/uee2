import { latinAlphabet } from "../../utils/alphabets";
import { arabicAlphabet } from "../../utils/alphabets";
import "./AlphabetPicker.css";

function AlphabetPicker(props) {
  function handleLetterSelection(e) {
    e.preventDefault();
    props.setSelectedLetter(e.target.innerText);
  }

  return (
    <div>
      <ul className="alphabetList">
        {latinAlphabet.map((letter) => (
          <li key={letter}>
            <button onClick={handleLetterSelection}>{letter}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlphabetPicker;
