import { getRecipe } from "./recipe.js";
//function to search for specific recipe and get it displayed
export async function searchRecipe(searchInputVal) {

    if (searchInputVal) {
        try {
            const response = await axios(`/search.php?s=${searchInputVal}`);
            if (response.data.meals) {
                //calling the getrecipe function from recipe.js file
                getRecipe(response.data.meals[0]);
            }
            else {
                alert(`Sorry, We don't have the recipe of ${searchInputVal} now!`)
            }
        }
        //catch any async request error
        catch (err) {
            console.error('Error fetching data: ', err);
        }
    }

    else
        alert('Enter a valid search');

}