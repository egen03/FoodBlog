import React from 'react';
import axios from 'axios';

const Api = () => {

    fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/extract?forceExtraction=true&url=http%253A%252F%252Fwww.melskitchencafe.com%252Fthe-best-fudgy-brownies%252F", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "2488370bfbmsh08b67cda654568bp1526a1jsnf2ced8aff3ef"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});

    return(
        <div>
            <form>
                <input type="text" />
                <button onClick="getRecipe" type="submit">Search</button>
            </form>
            
        </div>
    );
}

export default Api;