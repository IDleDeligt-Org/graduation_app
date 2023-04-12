import './App.css';
import { SearchBar } from './Components/Search_bar';
import DrinkPage from './Components/Drink_page';
import { CocktailList } from './Components/Search_result';


function App() {
  return (
    <div className="App">
      <div className="App-header">
        
      </div>

      <div className='App-content'>
        <SearchBar></SearchBar>
        <DrinkPage></DrinkPage>
      </div>

      <div className='App-footer'>

      </div>
    </div>
  );
}

export default App;
