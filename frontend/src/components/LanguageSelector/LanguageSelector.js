import "./LanguageSelector.css";

function LanguageSelector(props) {
  function handleClick(e) {
    e.preventDefault();
    props.setSelectedLanguage(e.target.id);
    props.setSelectedLetter("");
    document
      .querySelector(".selectedLangButton")
      .classList.remove("selectedLangButton");
    e.target.classList.add("selectedLangButton");
  }

  return (
    <div className="languageSelector">
      <button id="eng" className="selectedLangButton" onClick={handleClick}>
        English
      </button>
      <button id="ar" onClick={handleClick}>
        عربي
      </button>
      <button id="de" onClick={handleClick}>
        Deutsch
      </button>
      <button id="fr" onClick={handleClick}>
        Français
      </button>
    </div>
  );
}

export default LanguageSelector;
