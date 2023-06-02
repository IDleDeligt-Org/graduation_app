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
import { useAuth } from './Context/AuthContext';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import ProtectedRoutes from './Components/ProtectedRoutes copy';

function App() {

  const [pageState, setPageState] = useState({
    filteredCocktails: [],
    randomCocktails:[],
    selectedCocktail: null,
    searchInitiated: false,
    searchText: '',
  });

  const [showQuickstart, setShowQuickstart] = useState(true);
  const [favoriteList, setFavoriteList] = useState([]);
  const navigate = useNavigate();

  function navigateBackToSearch() {
    setPageState({
      ...pageState,
      selectedCocktail: null
    });
    navigate("/main");
  }

  function navigateBackToMain() {
    setShowQuickstart(true);
    setPageState({
      ...pageState,
      selectedCocktail: null,
      searchText: '',
      filteredCocktails: [],
    });

    navigate("/main");
  }

  function handleCocktailSelect(cocktail) {
    setPageState({
      ...pageState,
      selectedCocktail: cocktail,
    });

    navigate("/drink");
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
  
  function addRandomList(item){
    setPageState({
      ...pageState,
        randomCocktails: item
    });
  }

  return (
    <div className="App">
      <div style={{zIndex: -1}}>
        <Logo />
      </div>
      <div className="App-header"></div>
      
      <div className='App-content'>
        <Routes>
            <Route path="/" element={<ProtectedRoutes/>}>
              <Route path="/" element={<Navigate replace to="main"/>} />
              <Route path="/main" element={< MainPage
                      onCocktailSelect={handleCocktailSelect}
                      filteredCocktails={pageState.filteredCocktails}
                      setFilteredCocktails={(cocktails) => setPageState({ ...pageState, filteredCocktails: cocktails })}
                      onSearchInitiated={onSearchInitiated}
                      searchInitiated={pageState.searchInitiated}
                      showQuickstart={showQuickstart}
                      navigateBackToMain={navigateBackToMain}
                      searchText={pageState.searchText}
                      setSearchText={(searchText) => setPageState({ ...pageState, searchText: searchText })}
                      addRandomList={addRandomList}
                      randomCocktails={pageState.randomCocktails}/>}/>
              <Route path="/ingredients" element={<CreateDrinkPage />}/>
              <Route path="/inspiration" element={<InspirationPage />}/>
              <Route path="/favorites" element={<FavouritePage  
                      setFavoriteList={setFavoriteList}
                      favoriteList={favoriteList}
                      onCocktailSelect={handleCocktailSelect}/>} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path='/drink' element={<DrinkPage 
                      navigateBackToSearch={navigateBackToSearch}
                      cocktail={pageState.selectedCocktail}
                      favoriteList={favoriteList}
                      addFavoriteList={addFavoriteList}/>}/>
            </Route>

            <Route path='/login' element={<LoginPage />}/>
        </Routes>
      </div>
      
      <div className='App-footer'>
        <NavBar navigateToMain={navigateBackToMain} />
      </div>
    </div>
  );
}

export default App;
