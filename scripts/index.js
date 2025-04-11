import * as recipeModule from '../scripts/recipe.js';
recipeModule.checkModule();


axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1';
async function initialLoad()
{
    try{
    const response = await axios.get('/random.php');
    let recipe = response.data.meals[0];
    console.log(recipe);
    recipeModule.populateRecipeList(recipe);
}
catch (err)
{
    console.error('error fetching recipes: '+ err);
}
    
}



initialLoad();


