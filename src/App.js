import logo from './logo.svg';
import './App.css';
import {SearchBar} from './Components/Search_bar';
import CocktailPage from './Components/Cocktail_Page';
import { CocktailList } from './Components/Search_result';


function App() {
  return (
    <div className="App">
      Hallo på do
      <SearchBar></SearchBar>
      <CocktailList></CocktailList>
    </div>
  );
}

export default App;
