import { SearchBar } from "./Search_bar";
import sampleCocktails from '../Data/sampleCocktails.json';
import CocktailPage from "./Cocktail_Page";


export function CocktailList () {
    const cocktails = sampleCocktails.drinks[0];
    return (
        <div>
            <ul>
                <li>
                    {cocktails.strDrink}
                </li>
            </ul>
        </div>
    )
}