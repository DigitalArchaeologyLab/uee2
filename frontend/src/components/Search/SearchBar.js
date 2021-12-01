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
        <label htmlFor="header-search">
          <span className="visually-hidden">Search articles</span>
        </label>
        <input
          value={searchQuery}
          onInput={(e) => setSearchQuery(e.target.value)}
          type="text"
          id="header-search"
          placeholder="Search articles"
          name="s"
          autoComplete="off"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
