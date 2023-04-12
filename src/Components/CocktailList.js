export function CocktailList ({filteredCocktails}) {

    return (
        <div>
            {filteredCocktails.map((cocktail, index) => {
                return (
                    <>
                    <p key={index}>{cocktail.strDrink}</p>
                    <img src=""></img>
                    </>
                )
            })}
        </div>
    ) 
}