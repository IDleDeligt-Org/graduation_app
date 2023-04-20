import './Drink_page.css';
import React, { useState } from 'react';
import glassTypes from '../Data/glassTypes';


const DrinkPage = ({ cocktail, navigateBack, favoriteList, addFavoriteList}) => {
 
  const [isFavorite, setIsFavorite] = useState(false);

  const url = "https://sipster.azurewebsites.net/api/Favorite/user/2"

  async function postFavoriteList() {
    const requestBody = {
      cocktail: cocktail.$values,
      source: cocktail.source,
      userId: 2,
      favoriteBeverageId: cocktail.beverageId,
    }
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })

    .then((response) => response.json())
    .then((cocktail) => addFavoriteList((cocktail)))
  }

  const toggleFavorite = () => {
    if (!isFavorite) {
      postFavoriteList();}
    setIsFavorite(!isFavorite);
  };

  if (!cocktail) {
    return <div>No cocktail selected</div>;
  }
  
  const getGlassNameFromValue = (value) => {
    const glassType = glassTypes.find(glass => glass.Value === value);
    return glassType ? glassType.Name : "Unknown";
  }
  return (
    <div className='drink-page-content'>
      <div className='image-container'>
        <div className="back-button-container">
          <span className="material-icons back-button" onClick={() => navigateBack()}>arrow_back</span>
        </div>
        <img className='drink-page-image' src={cocktail.image} alt={cocktail.name} />
      </div>

      <div className='drink-page-text'>
        <div className='drink-page-header'>
          <div className='drink-page-title'>
            <h1>{cocktail.name}</h1>
            <div className='drink-page-tags'>
              <p>{cocktail.tag}</p>
            </div>
          </div>
          <span
            className={`material-icons favorite-icon ${isFavorite ? 'active' : ''}`}
            onClick={toggleFavorite}
          >
            {isFavorite ? 'favorite' : 'favorite_border'}
          </span>
        </div>

        <div className='dark-gray-box'>
          <h2>Ingredient</h2>
          <div className='drink-page-ingredients'>
            <div className='drink-page-ingredient'>
              <span className='drink-measurement'>Glass:</span>
              <span className='drink-ingredient'>{getGlassNameFromValue(cocktail.glass)}</span>
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

        <div className='dark-gray-box drink-page-instructions'>
          <h2>Instructions:</h2>
          <p>{cocktail.instruction}</p>
        </div>
      </div>
    </div>
  );
};


export default DrinkPage;