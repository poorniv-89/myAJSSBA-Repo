import * as recipeModule from '../scripts/recipe.js';
import * as searchModule from '../scripts/searchRecipe.js'
const searchInputEl = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', e=>{
    searchModule.searchRecipe(searchInputEl.value);
});



axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1';
async function initialLoad()
{
    try{
    const response = await axios.get('/random.php');
    let recipe = response.data.meals[0];
    console.log(recipe);
    recipeModule.getRecipe(recipe);
}
catch (err)
{
    console.error('error fetching recipes: '+ err);
}
    
}

initialLoad();


