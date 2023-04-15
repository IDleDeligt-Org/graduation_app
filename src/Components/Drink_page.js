import './Drink_page.css';
import React from 'react';

const DrinkPage = ({ cocktail }) => {
  if (!cocktail) {
    return <div>No cocktail selected</div>;
  }

  return (
    <div className='drink-page-content'>
      <img className='drink-page-image' src={cocktail.image} alt={cocktail.name} />

      <div className='drink-page-text'>
        <h1>{cocktail.name}</h1>

        <div className='drink-page-tags'>
          <p>{cocktail.tag}</p>
        </div>

        <div>
          <h2>Ingredient</h2>
          <div className='drink-page-ingredients'>
            <div className='drink-page-ingredient'>
              <span className='drink-measurement'>Glass:</span>
              <span className='drink-ingredient'>{cocktail.glass}</span>
            </div>
            {cocktail.beverageIngredients.$values.map((ingredients, index) => {
              return (
                <div key={index} className='drink-page-ingredient'>
                  <span className='drink-measurement'>{ingredients.measurment}</span>
                  <span className='drink-ingredient'>{ingredients.ingredient.name}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div className='drink-page-instructions'>
          <h2>Instructions:</h2>
          <p>{cocktail.instruction}</p>
        </div>
      </div>
    </div>
  );
};

export default DrinkPage;