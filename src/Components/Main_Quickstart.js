import React, { useEffect, useState } from 'react';
import './Main_Quickstart.css';
import { MdBrokenImage } from 'react-icons/md';

const MainQuickstart = ({ triggerSearchBeverage, triggerSearchIngredient, triggerSearchNonAlcoholic}) => {
    const quickstartOptions = ['Gin', 'Rum', 'Tequila', 'Vodka', 'Whiskey'];

    const [randomDrinks, setRandomDrinks] = useState([]);

    useEffect(() => {
        fetchRandomDrinks();
    }, []);

    const fetchRandomDrinks = async () => {
        try {
            const drinks = [];
            for (let i = 0; i < 4; i++) {
                const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
                const data = await response.json();
                drinks.push(data.drinks[0]);
            }
            setRandomDrinks(drinks);
        } catch (error) {
            console.error('Error fetching random drinks:', error);
        }
    };

    const handleImageLoad = (e) => {
        e.target.style.display = 'block';
        e.target.previousSibling.style.display = 'none';
    };

    const handleImageError = (e) => {
        e.target.style.display = 'none';
        e.target.previousSibling.style.display = 'flex';
    };

    return (
        <div className='main-quickstart'>
            <div className='random-drinks-container'>
                {randomDrinks.map((drink, index) => (
                    <div key={drink.idDrink} className="random-drink">
                        <div className="cocktail-item" onClick={() =>triggerSearchBeverage(drink.strDrink)}>
                            <div className="cocktail-image-placeholder">
                                <MdBrokenImage className="broken-image-icon" />
                            </div>
                            <img
                                className="cocktail-image"
                                src={drink.strDrinkThumb}
                                alt={drink.strDrink}
                                onLoad={handleImageLoad}
                                onError={handleImageError}
                                style={{ display: 'none' }}
                            />
                            <div className="cocktail-name">{drink.strDrink}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='quickstart-buttons'>
                {quickstartOptions.map((option, index) => (
                    <button
                        key={index}
                        className='quickstart-button'
                        onClick={() => {
                            onQuickstartClick(option);
                            triggerSearchIngredient(option);
                        }}>
                        <span className='quickstart-button-text'>{option}</span>
                    </button>
                ))}
                <button
                    className='quickstart-button'
                    onClick={() => {
                        onQuickstartClick('non_alcoholic');
                        triggerSearchNonAlcoholic();
                    }}
                >
                    <span className='quickstart-button-text'>No alcohol</span>
                </button>
            </div>
        </div>
    );
};

export default MainQuickstart;
