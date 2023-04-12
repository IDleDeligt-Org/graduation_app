import './App.css';
import LoginPage from './Components/Login_page';
import MainPage from './Components/Main_page';
import SearchPage from './Components/Search_page';
import DrinkPage from './Components/Drink_page';
import IngredientsPage from './Components/Ingredients_page';
import InspirationPage from './Components/Inspiration_page';
import FavouritePage from './Components/Favourites__page';
import SettingsPage from './Components/Settings_page';
import NavBar from './Components/Nav_bar';
import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('main');

  function navigateTo(page) {
    setCurrentPage(page);
  }

  return (
    <div className="App">
      <div className="App-header">
        
      </div>

      <div className='App-content'>
        {currentPage === 'login' && <LoginPage />}
        {currentPage === 'main' && <MainPage />}
        {currentPage === 'search' && <SearchPage />}
        {currentPage === 'ingredients' && <IngredientsPage />}
        {currentPage === 'inspiration' && <InspirationPage />}
        {currentPage === 'favourites' && <FavouritePage />}
        {currentPage === 'settings' && <SettingsPage />}
        {currentPage === 'drink' && <DrinkPage />}
      </div>

      <div className='App-footer'>
        <NavBar navigateTo={navigateTo} />
      </div>
    </div>
  );
}

export default App;
