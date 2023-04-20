import React, { useEffect } from "react";

export default function FavouritePage({ favoriteList, addFavoriteList }) {

  const url = "https://localhost:7195/api/Favorite/user/"

  useEffect(() => {
    async function fetchFavorites() {
      await fetch(url + 2)
      .then((response) => response.json())
      .then((result) => addFavoriteList(result.$values))
    }
    fetchFavorites();
  }, [addFavoriteList]);

    return (
      <div>
        {favoriteList && favoriteList.map((favoriteBeverage, index) => {
          return (
            <div key={index}>
              {favoriteBeverage.name}
            </div>
          )
        })}
        
      </div>
    );
};