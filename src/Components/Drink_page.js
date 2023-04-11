import './Drink_page.css';
import React from 'react';
import sampleCocktails from '../Data/sampleCocktails.json';

const DrinkPage = () => {
    const cocktail = sampleCocktails.drinks[0];
  
    return (
      <div className=''>
        <img className='Drink-thumbnail' src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        <h1>{cocktail.strDrink}</h1>
        <p>Tag: {cocktail.strCategory} {cocktail.strTags} {cocktail.strIBA}</p>
        <p>Glass: {cocktail.strGlass}</p>
        <p>Instructions: {cocktail.strInstructions}</p>
      </div>
    );
  };

export default DrinkPage;
