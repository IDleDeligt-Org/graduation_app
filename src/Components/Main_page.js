import './Main_page.css';
import { SearchBar } from './Search_bar';
import CocktailList from './CocktailList';
import MainQuickstart from './Main_Quickstart';
import React, { useState } from 'react';

const MainPage = ({
  onCocktailSelect,
  setFilteredCocktails,
  filteredCocktails,
  onSearchInitiated,
  showQuickstart,
  navigateBackToMain,
}) => {
  const [searchText, setSearchText] = useState("");

  const handleQuickstartSearch = (searchTerm) => {
    setSearchText(searchTerm);
  };

  const triggerSearchIngredient = async (searchTerm) => {
    onSearchInitiated();

    const url = "https://localhost:7195/api/ingredient";
    await fetch(url + "/" + searchTerm)
      .then((response) => response.json())
      .then((result) => setFilteredCocktails(result.$values));
  };

  const handleSearch = async (searchTerm) => {
    onSearchInitiated();

    const url = "https://localhost:7195/api/beverage";
    await fetch(url + "/" + searchTerm)
      .then((response) => response.json())
      .then((result) => setFilteredCocktails(result.$values));
  };

  const triggerSearchNonAlcoholic = async () => {
    onSearchInitiated();

    const url = "https://localhost:7195/api/ingredient/search/non_alcoholic";
    await fetch(url )
      .then((response) => response.json())
      .then((result) => setFilteredCocktails(result.$values));
  };

  return (
    <div className="main-page-container">
      <div className="main-page-content">
        {showQuickstart ? (
          <div className="main-quickstart-widget">
            <MainQuickstart
              onQuickstartClick={handleQuickstartSearch}
              onSearchTriggered={triggerSearchIngredient}
              onSearchTriggeredNonAlcoholic={triggerSearchNonAlcoholic}
            />
          </div>
        ) : (
          <CocktailList
            filteredCocktails={filteredCocktails}
            onCocktailSelect={onCocktailSelect}
            navigateBackToMain={navigateBackToMain}
          ></CocktailList>
        )}
      </div>
      <div className="search-bar-container">
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          setFilteredCocktails={setFilteredCocktails}
          onSearchInitiated={() => {
            onSearchInitiated();
          }}
          handleSearch={handleSearch}
        ></SearchBar>
      </div>
    </div>
  );
};

export default MainPage;
