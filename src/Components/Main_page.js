import './Main_page.css';
import { SearchBar } from './Search_bar';
import CocktailList from './CocktailList';
import MainQuickstart from './Main_Quickstart';
import { useState } from "react"

const MainPage = ({ onCocktailSelect }) => {
  const [filteredCocktails, setFilteredCocktails] = useState([]);
  const [showQuickstart, setShowQuickstart] = useState(true);

  return (
    <div className="main-page-container">
      
      <div className="main-page-content">
        {showQuickstart ? (
          <div className='main-quickstart-widget'>
            <MainQuickstart />
          </div>
        ) : (
          <CocktailList filteredCocktails={filteredCocktails} onCocktailSelect={onCocktailSelect}></CocktailList>
        )}
      </div>
      <div className="search-bar-container">
        <SearchBar
          setFilteredCocktails={setFilteredCocktails}
          onSearchInitiated={() => setShowQuickstart(false)}
        ></SearchBar>
      </div>
    </div>
  );
};

export default MainPage;
