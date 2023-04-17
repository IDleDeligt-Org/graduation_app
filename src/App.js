import './App.css';
import LoginPage from './Components/Login_page';
import MainPage from './Components/Main_page';
import DrinkPage from './Components/Drink_page';
import IngredientsPage from './Components/Ingredients_page';
import InspirationPage from './Components/Inspiration_page';
import FavouritePage from './Components/Favourites__page';
import SettingsPage from './Components/Settings_page';
import NavBar from './Components/Nav_bar';
import React, { useState } from 'react';
import Logo from './Components/Logo';

function App() {
  const [pageState, setPageSate] = useState({
    currentPage: "main",
    activePage: "main",
    filteredCocktails: [],
    selectedCocktail: null
  })
  const [currentPage, setCurrentPage] = useState('main');
  const [filteredCocktails, setFilteredCocktails] = useState([]);
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [activePage, setActivePage] = useState('main');

  function navigateTo(page) {
    setPageSate([...pageState, {activePage: page, currentPage: page}])
    //setActivePage(page);
    //setCurrentPage(page);
  }

  function navigateBack(){
    setActivePage("main");
    setCurrentPage("main");
    setSelectedCocktail(null);
  }

  function handleCocktailSelect(cocktail) {
    setSelectedCocktail(cocktail);
    setCurrentPage('drink');
  }

  return (
    <div className="App">
      <Logo />
      <div className="App-header">
        
      </div>

      <div className='App-content'>
        {currentPage === 'login' && <LoginPage />}

        {currentPage === 'main' && <MainPage 
          onCocktailSelect={handleCocktailSelect}
          filteredCocktails={filteredCocktails}
          setFilteredCocktails={setFilteredCocktails}/>}
        {currentPage === 'ingredients' && <IngredientsPage />}
        {currentPage === 'inspiration' && <InspirationPage />}
        {currentPage === 'favorites' && <FavouritePage />}
        {currentPage === 'settings' && <SettingsPage />}

        {currentPage === 'drink' && <DrinkPage navigateBack={navigateBack} cocktail={selectedCocktail} />}
      </div>

      <div className='App-footer'>
        <NavBar navigateTo={navigateTo} activePage={activePage} />
      </div>
    </div>
  );
}

export default App;
