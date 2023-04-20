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
    const response = await fetch(`${baseUrl}${urlPart}`);
    const result = await response.json();
  
    return result.$values;
  };

  const triggerSearchIngredient = async (searchText) => {
    const ingredients = await triggerSearch(`/ingredient/${searchText}`);
    return ingredients;
  };
  
  const triggerSearchBeverage = async (searchText) => {
    const beverages = await triggerSearch(`/beverage/${searchText}`);
    return beverages;
  };

  const triggerSearchAll = async (searchText) => {
    onSearchInitiated();

    const resultBeverages = triggerSearchBeverage(searchText);
    const resultIngredients = triggerSearchIngredient(searchText);

    const [ingredients, beverages] = await Promise.all([
      resultBeverages,
      resultIngredients,
    ]);

    const resultCombined = [...new Set([...beverages, ...ingredients])];

    setFilteredCocktails(resultCombined);
  };

  // // WORK IN PROGREE UNIQUE RECIPE SEARCH RESULTS
  // const triggerSearchAll = async (searchText) => {
  //   onSearchInitiated();
  
  //   const resultIngredients = triggerSearchIngredient(searchText);
  //   const resultBeverages = triggerSearchBeverage(searchText);
  
  //   const [ingredients, beverages] = await Promise.all([
  //     resultIngredients,
  //     resultBeverages,
  //   ]);
  
  //   const combinedList = [...new Set([...ingredients, ...beverages])];
  
  //   const seen = new Set();

  //   const uniqueResults = combinedList.filter(
  //     (cocktail) => {const duplicate = seen.has(cocktail.id);
  //       seen.add(cocktail.id);
  //       return !duplicate;}
  //   );
  
  //   setFilteredCocktails(uniqueResults);
  // };
  

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
    triggerSearchAll(searchText);
          }}
          triggerSearchBeverage={triggerSearchBeverage}
          triggerSearchAll={triggerSearchAll}
        ></SearchBar>
      </div>
    </div>
  );
};

export default MainPage;
