import './App.css';
import LoginPage from './Components/Login_page';
import MainPage from './Components/Main_page';
import DrinkPage from './Components/Drink_page';
import InspirationPage from './Components/Inspiration_page';
import FavouritePage from './Components/Favourites__page';
import SettingsPage from './Components/Settings_page';
import NavBar from './Components/Nav_bar';
import React, { useState } from 'react';
import Logo from './Components/Logo';
import CreateDrinkPage from './Components/Create_drink_page';

function App() {

  const [pageState, setPageState] = useState({
    currentPage: "login",
    activePage: "login",
    filteredCocktails: [],
    selectedCocktail: null,
    searchInitiated: false,
    searchText: '',
  });

  const [showQuickstart, setShowQuickstart] = useState(true);
  const [favoriteList, setFavoriteList] = useState([]);

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
      currentPage: 'main',
      searchText: '',
      filteredCocktails: [],
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
      selectedCocktail: null,
      searchText: '',
      filteredCocktails: [],
    });
  }

  function handleCocktailSelect(cocktail) {
    setPageState({
      ...pageState,
      selectedCocktail: cocktail,
      currentPage: 'drink'
    });
  }

  function onSearchInitiated() {
    setShowQuickstart(false);
    setPageState({
      ...pageState,
      searchInitiated: true
    });
  }

  function addFavoriteList(item) {
    setFavoriteList([...favoriteList, item]);    
  }
  
  return (
    <div className="App">
      <div style={{zIndex: -1}}>
        <Logo />
      </div>
      <div className="App-header"></div>
      
      <div className='App-content'>
        {pageState.currentPage === 'login' && <LoginPage 
          navigateBackToMain={navigateBackToMain}/>}
        {pageState.currentPage === 'main' && <MainPage
          onCocktailSelect={handleCocktailSelect}
          filteredCocktails={pageState.filteredCocktails}
          setFilteredCocktails=
          {(cocktails) => setPageState({ ...pageState, filteredCocktails: cocktails })}
          onSearchInitiated={onSearchInitiated}
          searchInitiated={pageState.searchInitiated}
          showQuickstart={showQuickstart}
          navigateBackToMain={navigateBackToMain}
          searchText={pageState.searchText}
          setSearchText=
          {(searchText) => setPageState({ ...pageState, searchText: searchText })}
        />}
        {pageState.currentPage === 'ingredients' && <CreateDrinkPage />}
        {pageState.currentPage === 'inspiration' && <InspirationPage />}
        {pageState.currentPage === 'favorites' && <FavouritePage
          addFavoriteList={addFavoriteList}
          favoriteList={favoriteList}
        />}
        {pageState.currentPage === 'settings' && <SettingsPage />}
        {pageState.currentPage === 'drink' && <DrinkPage
          navigateBack={navigateBack}
          cocktail={pageState.selectedCocktail}
          favoriteList={favoriteList}
          addFavoriteList={addFavoriteList}
        />}
      </div>
      <div className='App-footer'>
        <NavBar navigateTo={navigateTo} navigateToMain={navigateToMain} activePage={pageState.activePage} />
      </div>
    </div>
  );
}

export default App;
