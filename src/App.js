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
    currentPage: "login",
    activePage: "login",
    filteredCocktails: [],
    selectedCocktail: null,
    searchInitiated: false
  });
  const [showQuickstart, setShowQuickstart] = useState(true);

  function navigateTo(page) {
    setPageState({
      ...pageState,
      activePage: page,
      currentPage: page
    });
  }

  function navigateToMain() {
    setShowQuickstart(true);
    setPageState({
      ...pageState,
      activePage: 'main',
      currentPage: 'main'
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

  function navigateBackToMain() {
    setShowQuickstart(true);
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

  function handleSearchInitiated() {
    setShowQuickstart(false);
    setPageState({
      ...pageState,
      searchInitiated: true
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
          setFilteredCocktails={(cocktails) => setPageState({ ...pageState, filteredCocktails: cocktails })}
          onSearchInitiated={handleSearchInitiated}
          searchInitiated={pageState.searchInitiated}
          showQuickstart={showQuickstart}
          navigateBackToMain={navigateBackToMain}
        />}
        {pageState.currentPage === 'ingredients' && <IngredientsPage />}
        {pageState.currentPage === 'inspiration' && <InspirationPage />}
        {pageState.currentPage === 'favorites' && <FavouritePage />}
        {pageState.currentPage === 'settings' && <SettingsPage />}
        {pageState.currentPage === 'drink' && <DrinkPage navigateBack={navigateBack} cocktail={pageState.selectedCocktail} />}
      </div>
      <div className='App-footer'>
        <NavBar navigateTo={navigateTo} navigateToMain={navigateToMain} activePage={pageState.activePage} />
      </div>
    </div>
  );
}

export default App;
