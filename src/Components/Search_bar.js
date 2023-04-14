import './Search_bar.css';
import { useState } from "react"


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
        <form className='search-bar' onSubmit={handleSearch}>
            <label className='search-field'> 
                <input value={searchText} onChange={event => checkSearchText(event.target.value)} name="searchText" placeholder='Search...'></input>
            </label>
            <button type="submit" className="search-btn material-icons">search</button>
        </form>
    );
}
