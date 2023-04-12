import './App.css';
import LoginPage from './Components/Login_page';
import MainPage from './Components/Main_page';
import SearchPage from './Components/Search_page';
import DrinkPage from './Components/Drink_page';
import IngredientsPage from './Components/Ingredients_page';
import InspirationPage from './Components/Inspiration_page';
import FavouritePage from './Components/Favourites__page';
import SettingsPage from './Components/Settings_page';
import { SearchBar } from './Components/Search_bar';
import { CocktailList } from './Components/CocktailList';
import { useState } from "react"

function App() {
  const [filteredCocktails, setFilteredCocktails] = useState([]);

  return (
    <div className="App">
      <div className="App-header">
        
      </div>

      <div className='App-content'>
        <LoginPage></LoginPage>
        <MainPage></MainPage>
        <SearchPage></SearchPage>
        <IngredientsPage></IngredientsPage>
        <InspirationPage></InspirationPage>
        <FavouritePage></FavouritePage>
        <SettingsPage></SettingsPage>
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
