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
  setSearchText,
  addRandomList,
  randomCocktails,
}) => {

  const triggerQuickstartSearch = (searchText) => {
    setSearchText(searchText);
  };

  const triggerSearch = async (urlPart) => {
    console.log(urlPart);
    onSearchInitiated();
    const baseUrl = "https://localhost:7195/api";
    const response = await fetch(`${baseUrl}${urlPart}`);
    const result = await response.json();
    console.log(result.$values);
    setFilteredCocktails(result.$values);
  };

  const triggerSearchIngredient = async (searchText) => {
    const ingredients = await triggerSearch(`/beverage/ingredient/${searchText}`);
    return ingredients;
  };
  
  const triggerSearchBeverage = async (searchText) => {
    const beverages = await triggerSearch(`/beverage/name/${searchText}`);
    return beverages;
  };

  const triggerSearchNonAlcoholic = () => {
    triggerSearch("/beverage/search/non_alcoholic");
  };

  const triggerSearchAll = async (searchText) => {
    onSearchInitiated();
  
    const resultIngredients = triggerSearchIngredient(searchText);
    const resultBeverages = triggerSearchBeverage(searchText);
  
    const [ingredients, beverages] = await Promise.all([
      resultIngredients,
      resultBeverages,
    ]);
    
    const combinedList = [...new Set([...ingredients, ...beverages])];

    const uniqueResults = Array
          .from(new Set(combinedList.map(cocktail => cocktail.beverageId)))
          .map(beverageId => {
            return combinedList.find(cocktail => cocktail.beverageId === beverageId)
          })

    setFilteredCocktails(uniqueResults);
  };

  return (
    <div className="main-page-container">
      <div className="main-page-content">
        {showQuickstart ? (
          <div className="main-quickstart-widget">
            <MainQuickstart
              triggerQuickstartSearch={triggerQuickstartSearch}
              triggerSearchBeverage = {triggerSearchBeverage}
              triggerSearchIngredient={triggerSearchIngredient}
              triggerSearchNonAlcoholic={triggerSearchNonAlcoholic}
              randomCocktails={randomCocktails}
              addRandomList={addRandomList}
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
      <div className="main-page-search-bar-container">
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          setFilteredCocktails={setFilteredCocktails}
          onSearchInitiated={async() => {
            triggerSearchAll(searchText);
          }}
          triggerSearchAll={triggerSearchAll}
        ></SearchBar>
      </div>
    </div>
  );
};

export default MainPage;
