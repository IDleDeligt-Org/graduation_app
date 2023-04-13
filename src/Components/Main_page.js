import { SearchBar } from './Search_bar';
import CocktailList from './CocktailList';
import { useState } from "react"

const MainPage = ({ onCocktailSelect }) => {
  const [filteredCocktails, setFilteredCocktails] = useState([]);

  return (
    <div>
      <CocktailList filteredCocktails={filteredCocktails} onCocktailSelect={onCocktailSelect}></CocktailList>
      <SearchBar setFilteredCocktails={setFilteredCocktails}></SearchBar>
    </div>
  );
};

export default MainPage;
