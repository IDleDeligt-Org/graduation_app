import React from 'react';
import sampleCocktails from '../Data/sampleCocktails.json';

const CocktailPage = () => {
    const cocktail = sampleCocktails.drinks[0];
  
    return (
      <div>
        <h1>{cocktail.strDrink}</h1>
        <p>Category: {cocktail.strCategory}</p>
        <p>Glass: {cocktail.strGlass}</p>
        <p>Instructions: {cocktail.strInstructions}</p>
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      </div>
    );
  };

export default CocktailPage;
