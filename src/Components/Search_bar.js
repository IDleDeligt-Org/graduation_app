import { useEffect, useState } from "react"


export function SearchBar({setFilteredCocktails}){
    const [searchText, setSearchText] = useState("");
    const url = "https://localhost:7195/api/beverage"

    async function handleSearch(event) {
        event.preventDefault();

        await fetch(url + "/" + searchText)
            .then((response) => response.json())
            .then((result) => setFilteredCocktails(result.$values))
            
        }

    function checkSearchText(text){
        setSearchText(text.replace(/[^a-zA-Z]+/g, ' '));
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
