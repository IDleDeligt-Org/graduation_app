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
    
  }

  function mapCocktail(){

  }

    return (
      <div>
        {favoriteList && favoriteList.map((favoriteBeverage, index) => {
          favoriteBeverage.map((cocktail) => {
            console.log(cocktail.name)
            return ( 
              <div key={index}>
                <span style={{color: "Black"}}>{cocktail.name}</span>
              </div>
            )
          })})
        }
      </div>
    );
};