import React, { useEffect } from "react";

export default function FavouritePage({ favoriteList, addFavoriteList }) {

  console.log("favoritePage rendered")
  const url = "https://sipster.azurewebsites.net/api/Favorite/user/"

  useEffect(() => {
    async function fetchFavorites() {
      await fetch(url + 2)
      .then((response) => response.json())
      .then((result) => addFavoriteList(result.$values))
    }
    fetchFavorites();
  }, []);

  function renderCocktails() {
    // Flatten the array
    const flattenedBeverages = favoriteList.flat();

    // Render the cocktails
    return flattenedBeverages.map((cocktail, index) => (
      <div key={index} style={{color: "Black"}}>{cocktail.name}</div>
    ))
  }

  return (
    <div>
      {renderCocktails()}
    </div>
  );
};