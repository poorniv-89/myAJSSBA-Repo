import { getRecipe } from "./recipe.js";

export async function searchRecipe(searchInputVal) {

    if (searchInputVal) {
        try {
            const response = await axios(`/search.php?s=${searchInputVal}`);
            if (response.data.meals) {
                getRecipe(response.data.meals[0]);
            }
            else {
                alert(`Sorry, We don't have the recipe of ${searchInputVal} now!`)
            }
        }
        catch (err) {
            console.error('Error fetching data: ', err);
        }
    }

    else
        console.log('Enter a valid search')

}