import { useState } from "react";
import SearchBar from "../../components/Search/SearchBar";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";
import "./Sidebar.css";
import AlphabetPicker from "../../components/AlphabetPicker/AlphabetPicker";

function Sidebar(props) {
  return (
    <aside className="sidebar">
      <SearchBar
        searchQuery={props.searchQuery}
        setSearchQuery={props.setSearchQuery}
      />
      <LanguageSelector
        setSelectedLanguage={props.setSelectedLanguage}
        setSelectedLetter={props.setSelectedLetter}
      />
      <AlphabetPicker
        setSelectedLetter={props.setSelectedLetter}
        selectedLanguage={props.setSelectedLanguage}
      />
    </aside>
  );
}

export default Sidebar;
