import './Search_bar.css';


export function SearchBar({
  searchText,
  setSearchText,
  setFilteredCocktails,
  onSearchInitiated,
}) {
  
  const url = "https://localhost:7195/api/beverage"

  async function triggerSearch(event) {
    event.preventDefault();

    onSearchInitiated();

    await fetch(url + "/" + searchText)
      .then((response) => response.json())
      .then((result) => setFilteredCocktails(result.$values));
  }

  function checkSearchText(text) {
    setSearchText(text.replace(/[^a-zA-Z]+/g, ' '));
  }

  return (
    <form className='search-bar' onSubmit={triggerSearch}>
      <label className='search-field'>
        <input
          value={searchText}
          onChange={event => checkSearchText(event.target.value)}
          name="searchText"
          placeholder='Search...'
        ></input>
      </label>
      <button type="submit" className="search-btn material-icons search-icon">search</button>
    </form>
  );
}
