
//importing modules 
import * as recipeModule from '../scripts/recipe.js';
import * as searchModule from '../scripts/searchRecipe.js'

//get the dom elements and cache into variables
const searchInputEl = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
//adding event listener to search button
searchBtn.addEventListener('click', e=>{
    searchModule.searchRecipe(searchInputEl.value);
});


//setting base url for axio requests
axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1';

//function to load a random recipe 
async function initialLoad()
{
    try{
    const response = await axios.get('/random.php');
    let recipe = response.data.meals[0];
    console.log(recipe);
    //passing the recipe to get it displayed in the browser
    recipeModule.getRecipe(recipe);
}
catch (err)
{
    console.error('error fetching recipes: '+ err);
}
    
}
// Calling the initialLoad function to run when the page loads
initialLoad();


