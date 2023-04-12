import './App.css';
import { SearchBar } from './Components/Search_bar';
import DrinkPage from './Components/Drink_page';
import { CocktailList } from './Components/CocktailList';
import { useState } from "react"

function App() {
  const [filteredCocktails, setFilteredCocktails] = useState([]);

  return (
    <div className="App">
      <div className="App-header">
        
      </div>

      <div className='App-content'>
        <SearchBar setFilteredCocktails={setFilteredCocktails}></SearchBar>
        <CocktailList filteredCocktails={filteredCocktails}></CocktailList>
        <DrinkPage></DrinkPage>
      </div>

      <div className='App-footer'>

      </div>
    </div>
  );
}

export default App;
