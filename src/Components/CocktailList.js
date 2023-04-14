import React from 'react';
import './CocktailList.css';

export default function CocktailList ({filteredCocktails, onCocktailSelect}) {
  return (
    <div className='cocktail-list'>
      {filteredCocktails.map((cocktail, index) => {
        return (
          <div key={index} className='cocktail-item' onClick={() => onCocktailSelect(cocktail)}>
            <div className='cocktail-name'>{cocktail.name}</div>
            <img className='cocktail-image' src={cocktail.image} alt={cocktail.name} />
          </div>
        )
      })}
    </div>
  )
}