// Main_page.js
import './Main_page.css';
import { SearchBar } from './Search_bar';
import CocktailList from './CocktailList';
import { useState } from "react"

const MainPage = ({ onCocktailSelect }) => {
  const [filteredCocktails, setFilteredCocktails] = useState([]);

  return (
    <div className="main-page-container">
      <div className="main-page-content">
        <CocktailList filteredCocktails={filteredCocktails} onCocktailSelect={onCocktailSelect}></CocktailList>
      </div>
      <div className="search-bar-container">
        <SearchBar setFilteredCocktails={setFilteredCocktails}></SearchBar>
      </div>
    </div>
  );
};

export default MainPage;
