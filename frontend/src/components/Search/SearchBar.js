import { useHistory } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const history = useHistory();
  const onSubmit = (e) => {
    history.push(`?s=${searchQuery}`);
    e.preventDefault();
  };

  return (
    <div className="searchbar">
      <form action="/" method="get" onSubmit={onSubmit}>
        <label htmlFor="textsearch">
          <span className="visually-hidden">Search articles</span>
        </label>
        <input
          value={searchQuery}
          onInput={(e) => setSearchQuery(e.target.value)}
          type="text"
          id="textsearch"
          placeholder="Search articles"
          autoComplete="off"
        />
        <button type="submit" className="searchButton">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
