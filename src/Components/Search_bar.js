import { useState } from "react"
import { CocktailList } from "./Search_result"
import sampleCocktails from '../Data/sampleCocktails.json';


export function SearchBar(){
    const [searchText, setSearchText] = useState("");
    const [filteredCocktails, setFilteredCocktails] = useState([]);

    const handleSearch = (event) => {
        event.preventDefault();
        const filtered = sampleCocktails.drinks.filter(
            (cocktail) =>
            cocktail.strDrink
            .toLowerCase()
            .includes(searchText.toLowerCase())
        );
        setFilteredCocktails(filtered);
    }

    return (
        <form onSubmit={handleSearch}>
        <label> 
            <input value={searchText} onChange={event => setSearchText(event.target.value)}></input>
        </label>
        <button type="submit">Search</button>
        {filteredCocktails.length > 0 && <CocktailList cocktails={filteredCocktails} />}
        </form>
    );
}