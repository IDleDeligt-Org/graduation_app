import { SearchBar } from './Search_bar';
import { CocktailList } from './CocktailList';
import { useState } from "react"

const SearchPage = () => {
  const [filteredCocktails, setFilteredCocktails] = useState([]);
    
  
    return (
      <div>
        <SearchBar setFilteredCocktails={setFilteredCocktails}></SearchBar>
        <CocktailList filteredCocktails={filteredCocktails}></CocktailList>
      </div>
    );
  };
  
  export default SearchPage;