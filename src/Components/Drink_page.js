import './Drink_page.css';
import React from 'react';

const DrinkPage = ({ cocktail }) => {
  if (!cocktail) {
    return <div>No cocktail selected</div>;
  }

  return (
    <div className='Drink-page-content'>
      <img className='Drink-page-image' src={cocktail.image} alt={cocktail.name} />

      <div className='Drink-page-text'>
        <h1>{cocktail.name}</h1>

        <div className='Drink-page-tags'>
          <p>{cocktail.tag}</p>
        </div>

        <br /><p>Glass: {cocktail.glass}</p>

        <div className='Drink-page-ingredient'>
          <h2>Ingredient</h2>
          {cocktail.beverageIngredients.$values.map((ingredients, index) => {
            return (
              <>
              <div key={index}>
                <span>{ingredients.measurment}</span>
                <span style={{marginLeft: "5px"}}> | </span>
                <span>{ingredients.ingredient.name}</span> </div>
              </>
            )
          })} 
        </div>

        <div className='Drink-page-instructions'>
          <h2>Instructions:</h2>
          <p>{cocktail.instruction}</p>
        </div>
      </div>
    </div>
  );
};

export default DrinkPage;