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
  const [pageState, setPageState] = useState({
    currentPage: "main",
    activePage: "main",
    filteredCocktails: [],
    selectedCocktail: null
  });

  function navigateTo(page) {
    setPageState({
      ...pageState,
      activePage: page,
      currentPage: page
    });
  }

  function navigateBack() {
    setPageState({
      ...pageState,
      activePage: "main",
      currentPage: "main",
      selectedCocktail: null
    });
  }

  function handleCocktailSelect(cocktail) {
    setPageState({
      ...pageState,
      selectedCocktail: cocktail,
      currentPage: 'drink'
    });
  }

  return (
    <div className="App">
      <Logo />
      <div className="App-header"></div>

      <div className='App-content'>
        {pageState.currentPage === 'login' && <LoginPage />}

        {pageState.currentPage === 'main' && <MainPage 
          onCocktailSelect={handleCocktailSelect}
          filteredCocktails={pageState.filteredCocktails}
          setFilteredCocktails={(cocktails) => setPageState({...pageState, filteredCocktails: cocktails})}
        />}
        {pageState.currentPage === 'ingredients' && <IngredientsPage />}
        {pageState.currentPage === 'inspiration' && <InspirationPage />}
        {pageState.currentPage === 'favorites' && <FavouritePage />}
        {pageState.currentPage === 'settings' && <SettingsPage />}

        {pageState.currentPage === 'drink' && <DrinkPage navigateBack={navigateBack} cocktail={pageState.selectedCocktail} />}
      </div>

      <div className='App-footer'>
        <NavBar navigateTo={navigateTo} activePage={pageState.activePage} />
      </div>
    </div>
  );
}

export default App;
