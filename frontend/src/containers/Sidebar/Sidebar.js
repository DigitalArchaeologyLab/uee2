import SearchBar from "../../components/Search/SearchBar";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";
import "./Sidebar.css";
import AlphabetPicker from "../../components/AlphabetPicker/AlphabetPicker";

function Sidebar(props) {
  return (
    <aside className="sidebar">
      <h2>Filter articles</h2>
      <LanguageSelector
        setSelectedLanguage={props.setSelectedLanguage}
        setSelectedLetter={props.setSelectedLetter}
      />
      <AlphabetPicker
        setSelectedLetter={props.setSelectedLetter}
        selectedLanguage={props.setSelectedLanguage}
        alphabet={props.alphabet}
      />
      <hr />
      <SearchBar
        searchQuery={props.searchQuery}
        setSearchQuery={props.setSearchQuery}
      />
    </aside>
  );
}

export default Sidebar;
