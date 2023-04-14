export default function CocktailList ({filteredCocktails, onCocktailSelect}) {

    console.log(filteredCocktails)

    return (
        <div>
            {filteredCocktails.map((cocktail, index) => {
                return (
                    <>
                    <p key={index} onClick={() => onCocktailSelect(cocktail)}>{cocktail.name}</p>
                    <img src="" alt=""></img>
                    </>
                )
            })}
        </div>
    ) 
}
