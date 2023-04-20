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

  function mapBeverages() {
    console.log("mapBeverages called");
    return (
      <div>
        {favoriteList.map((favoriteBeverage, index) => (
          <div key={index}>{mapCocktail(favoriteBeverage)}</div>
        ))}
      </div>
    )
  }  

  function mapCocktail(favoriteBeverage){
    return favoriteBeverage.map((cocktail, index) => (
      <div key={index} style={{color: "Black"}}>{cocktail.name}</div>
    ))
  }
  

  return (
    <div>
      {mapBeverages()}
    </div>
  );  
};