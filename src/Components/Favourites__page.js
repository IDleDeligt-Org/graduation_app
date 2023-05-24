import React, { useEffect } from "react";
import { MdBrokenImage } from 'react-icons/md';
import './Favourites_page.css';

export default function FavouritePage({ 
  favoriteList, 
  setFavoriteList,
  onCocktailSelect,
}) {
  const handleImageLoad = (e) => {
    e.target.style.display = 'block';
    e.target.previousSibling.style.display = 'none';
  };

  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.previousSibling.style.display = 'flex';
  };
  console.log("favoritePage rendered")
  const url = "https://localhost:7195/api/Favorite/user/"

  useEffect(() => {
    async function fetchFavorites() {
      await fetch(url + 2)
        .then((response) => response.json())
        .then((result) => setFavoriteList(result.$values))
    }
    fetchFavorites();
  }, []);

  function renderCocktails() {
    // Flatten the array
    const flattenedBeverages = favoriteList.flat();

    // Render the cocktails
    return flattenedBeverages.map((cocktail, index) => (
      <div key={index} className="favorite-item" onClick={() => onCocktailSelect(cocktail)}>
        <div className="favorite-image-placeholder">
          <MdBrokenImage className="broken-image-icon" />
        </div>
        <img
          className="favorite-image"
          src={cocktail.image}
          alt={cocktail.name}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{ display: 'none' }}
        />
        <div className="favorite-text">
          <h2 className="favorite-name">{cocktail.name}</h2>
          <p className="favotire-ingredients">{cocktail.beverageIngredients.$values.map((ingredients) => ingredients.ingredient.name).join(', ')}</p>
        </div>

      </div>
    ))
  }

  return (
    <div className="favorite-container">
      <h1 className='favorites-h1'>my favorites</h1>
      {renderCocktails()}
    </div>
  );
};