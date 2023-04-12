import { SearchBar } from './Search_bar';
import CocktailList from './CocktailList';
import { useState } from "react"

const MainPage = ({ onCocktailSelect }) => {
  const [filteredCocktails, setFilteredCocktails] = useState([]);

  return (
    <div>
      <SearchBar setFilteredCocktails={setFilteredCocktails}></SearchBar>
      <CocktailList filteredCocktails={filteredCocktails} onCocktailSelect={onCocktailSelect}></CocktailList>
    </div>
  );
};

export default MainPage;
