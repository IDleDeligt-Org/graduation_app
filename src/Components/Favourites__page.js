import { async } from "q";
import React from "react";
import { useEffect, useState } from "react";

export default function FavouritePage(){
  const [favoriteList, setFavoriteList] = useState([]);
  const url = "https://localhost:7195/api/Favorite/user/" //bruker user2, må endres

  useEffect(() => {
    async function fetchFavorites() {
      await fetch(url + 2)
      .then((response) => response.json())
      .then((result) => setFavoriteList(result.$values))
    }
    fetchFavorites();
  }, []);

    return (
      <div>
        {favoriteList.map((favoriteBeverage, index) => {
          return (
            <div>
              {favoriteBeverage.name}
            </div>
          )
        })}
        
      </div>
    );
};