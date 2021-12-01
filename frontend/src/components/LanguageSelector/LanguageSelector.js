function LanguageSelector(props) {
  function handleClick(e) {
    e.preventDefault();
    props.setSelectedLanguage(e.target.id);
  }

  return (
    <div className="languageSelector">
      <button id="eng" onClick={handleClick}>
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
