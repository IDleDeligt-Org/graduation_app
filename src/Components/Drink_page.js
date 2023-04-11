import './Drink_page.css';
import React from 'react';
import sampleCocktails from '../Data/sampleCocktails.json';

const DrinkPage = () => {
  const cocktail = sampleCocktails.drinks[0];

  return (
    <div className='Drink-page-content'>
      <img className='Drink-page-image' src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />

      <div className='Drink-page-text'>
        <h1>{cocktail.strDrink}</h1>

        <div className='Drink-page-tags'>
          <p>{cocktail.strCategory} {cocktail.strTags} {cocktail.strIBA}</p>
        </div>

        <br /><p>Glass: {cocktail.strGlass}</p>

        <div className='Drink-page-ingredient'>
          <h2>Ingredient</h2>
          <p>{cocktail.strMeasure1} {cocktail.strIngredient1}</p>
          <p>{cocktail.strMeasure2} {cocktail.strIngredient2}</p>
          <p>{cocktail.strMeasure3} {cocktail.strIngredient3}</p>
          <p>{cocktail.strMeasure4} {cocktail.strIngredient4}</p>
          <p>{cocktail.strMeasure5} {cocktail.strIngredient5}</p>
        </div>

        <div className='Drink-page-instructions'>
          <h2>Instructions:</h2>
          <p>{cocktail.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default DrinkPage;
