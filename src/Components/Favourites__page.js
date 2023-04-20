import React, { useEffect } from "react";

export default function FavouritePage({ favoriteList, addFavoriteList }) {

  const url = "https://sipster.azurewebsites.net/api/Favorite/user/"

  useEffect(() => {
    async function fetchFavorites() {
      await fetch(url + 2)
      .then((response) => response.json())
      .then((result) => addFavoriteList(result.$values))
    }
    fetchFavorites();
  }, []);

  function mapBeverages() {
    favoriteList.map((favoriteBeverage, index) => (
      <div>{mapCocktail}</div>
    ))
  }

  function mapCocktail(){
    favoriteBeverage.map((cocktail, index) => (
      <span key={index} style={{color: "Black"}}>{cocktail.name}</span>
    ))
  }

  return (
    mapBeverages()
  );  
};