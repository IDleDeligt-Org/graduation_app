import './Search_bar.css';


export function SearchBar({
  searchText,
  setSearchText,
  triggerSearchBeverage,
  triggerSearchIngredient,
}) {

  function checkSearchText(text) {
    setSearchText(text.replace(/[^a-zA-Z]+/g, ' '));
  }

  const onSubmit = (event) => {
    event.preventDefault();
    triggerSearchBeverage(searchText);
  };

  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <label className="search-field">
        <input
          value={searchText}
          onChange={(event) => checkSearchText(event.target.value)}
          name="searchText"
          placeholder="Search..."
        ></input>
      </label>
      <button type="submit" className="search-btn material-icons search-icon">
        search
      </button>
    </form>
  );
}
