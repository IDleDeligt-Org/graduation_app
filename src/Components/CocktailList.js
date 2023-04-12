export default function CocktailList ({filteredCocktails, onCocktailSelect}) {

    return (
        <div>
            {filteredCocktails.map((cocktail, index) => {
                return (
                    <>
                    <p key={index} onClick={() => onCocktailSelect(cocktail)}>{cocktail.strDrink}</p>
                    <img src="" alt=""></img>
                    </>
                )
            })}
        </div>
    ) 
}
