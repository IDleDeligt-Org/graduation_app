import './Main_page.css';
import { SearchBar } from './Search_bar';
import CocktailList from './CocktailList';
import MainQuickstart from './Main_Quickstart';
import { useState } from "react"
import FavouritePage from './Favourites__page';

const MainPage = ({ onCocktailSelect }) => {
  const [filteredCocktails, setFilteredCocktails] = useState([]);
  const [showQuickstart, setShowQuickstart] = useState(true);
  const [searchText, setSearchText] = useState("");

  const handleQuickstartSearch = (searchTerm) => {
    setSearchText(searchTerm);
  };

  const triggerSearch = (searchTerm) => {
    handleSearch(searchTerm);
  };

  const handleSearch = async (searchTerm) => {
    setShowQuickstart(false);

    const url = "https://localhost:7195/api/beverage";
    await fetch(url + "/" + searchTerm)
      .then((response) => response.json())
      .then((result) => setFilteredCocktails(result.$values));
  };

  return (
    <div className="main-page-container">
      <div className="main-page-content">
        {showQuickstart ? (
          <div className='main-quickstart-widget'>
            <MainQuickstart
              onQuickstartClick={handleQuickstartSearch}
              onSearchTriggered={triggerSearch}
            />
          </div>
        ) : (
          <CocktailList filteredCocktails={filteredCocktails} onCocktailSelect={onCocktailSelect}></CocktailList>
        )}
      </div>
      <div className="search-bar-container">
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          setFilteredCocktails={setFilteredCocktails}
          onSearchInitiated={() => setShowQuickstart(false)}
          handleSearch={handleSearch}
        ></SearchBar>
      
      </div>
    </div>
  );
};

export default MainPage;
