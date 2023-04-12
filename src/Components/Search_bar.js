import { useState } from "react"
import sampleCocktails from '../Data/sampleCocktails.json';


export function SearchBar({setFilteredCocktails}){
    const [searchText, setSearchText] = useState("");

    function handleSearch(event) {
        event.preventDefault();
        if (searchText !== "") {
             const filtered = sampleCocktails.drinks.filter(
                 (cocktail) =>
                 cocktail.strDrink
                 .toLowerCase()
                 .includes(searchText.toLocaleLowerCase())
                 );
            setFilteredCocktails(filtered);
            }
    }
    
    return (
        <form onSubmit={handleSearch}>
            <label> 
                <input value={searchText} onChange={event => setSearchText(event.target.value)} name="searchText"></input>
            </label>
            <button type="submit">Search</button>
        </form>
    );
}
