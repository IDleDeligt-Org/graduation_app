import './Main_page.css';
import { SearchBar } from './Search_bar';
import CocktailList from './CocktailList';
import MainQuickstart from './Main_Quickstart';
import React from 'react';

const MainPage = ({
  onCocktailSelect,
  setFilteredCocktails,
  filteredCocktails,
  onSearchInitiated,
  showQuickstart,
  navigateBackToMain,
  searchText,
  setSearchText
}) => {

  const triggerQuickstartSearch = (searchText) => {
    setSearchText(searchText);
  };

  const triggerSearch = async (urlPart) => {
    onSearchInitiated();

    const baseUrl = "https://localhost:7195/api";
    await fetch(`${baseUrl}${urlPart}`)
      .then((response) => response.json())
      .then((result) => setFilteredCocktails(result.$values));
  };

  const triggerSearchIngredient = (searchText) => {
    triggerSearch(`/ingredient/${searchText}`);
  };

  const triggerSearchBeverage = (searchText) => {
    triggerSearch(`/beverage/${searchText}`);
  };

  const triggerSearchNonAlcoholic = () => {
    triggerSearch("/ingredient/search/non_alcoholic");
  };

  return (
    <div className="main-page-container">
      <div className="main-page-content">
        {showQuickstart ? (
          <div className="main-quickstart-widget">
            <MainQuickstart
              onQuickstartClick={triggerQuickstartSearch}
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
          triggerSearchBeverage={triggerSearchBeverage}
        ></SearchBar>
      </div>
    </div>
  );
};

export default MainPage;
