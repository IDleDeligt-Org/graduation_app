import React from 'react';
import './CocktailList.css';
import { MdBrokenImage } from 'react-icons/md';

export default function CocktailList({ filteredCocktails, onCocktailSelect }) {
    const handleImageLoad = (e) => {
        e.target.style.display = 'block';
        e.target.previousSibling.style.display = 'none';
    };

    const handleImageError = (e) => {
        e.target.style.display = 'none';
        e.target.previousSibling.style.display = 'flex';
    };

    return (
        <div className="cocktail-list">
            {filteredCocktails.map((cocktail, index) => {
                return (
                    <div key={index} className="cocktail-item" onClick={() => onCocktailSelect(cocktail)}>
                        <div className="cocktail-image-placeholder">
                            <MdBrokenImage className="broken-image-icon" />
                        </div>
                        <img
                            className="cocktail-image"
                            src={cocktail.image}
                            alt={cocktail.name}
                            onLoad={handleImageLoad}
                            onError={handleImageError}
                            style={{ display: 'none' }}
                        />
                        <div className="cocktail-name">{cocktail.name}</div>
                    </div>
                );
            })}
        </div>
    );
}
