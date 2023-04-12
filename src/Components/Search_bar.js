import { useState } from "react"
import sampleCocktails from '../Data/sampleCocktails.json';


export function SearchBar({setFilteredCocktails}){
    const [searchText, setSearchText] = useState("");

    function handleSearch(event) {
        event.preventDefault();
        if (searchText !== "") {
            searchText.replace(/[^a-zA-Z]+/g, '');
             const filtered = sampleCocktails.drinks.filter(
                 (cocktail) =>
                 cocktail.strDrink
                 .toLowerCase()
                 .includes(searchText.toLocaleLowerCase())
                 );
            setFilteredCocktails(filtered);

            // Maks antall tegn, minimum antall, regex a-z A-Z 
            }
    }

    function checkSearchText(text){
        setSearchText(text.replace(/[^a-zA-Z]+/g, ''));
    }
    
    return (
        <form onSubmit={handleSearch}>
            <label> 
                <input value={searchText} onChange={event => checkSearchText(event.target.value)} name="searchText"></input>
            </label>
            <button type="submit">Search</button>
        </form>
    );
}
