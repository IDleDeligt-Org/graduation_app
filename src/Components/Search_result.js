import { SearchBar } from "./Search_bar";
import sampleCocktails from '../Data/sampleCocktails.json';
import CocktailPage from "./Cocktail_Page";


export function CocktailList () {
    const cocktails = sampleCocktails.drinks;

    return (
        <div>
            <ul>
                {cocktails.map((cocktail) => (
                <li>
                    {cocktail.strDrink} {cocktail.strCategory} 
                </li>
                ))}
            </ul>
        </div>
    )
}