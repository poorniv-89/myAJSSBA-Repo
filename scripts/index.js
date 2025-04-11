import * as recipeModule from '../scripts/recipe.js';
recipeModule.checkModule();


axios.defaults.baseURL = 'https://tasty.p.rapidapi.com';
axios.defaults.headers['x-rapidapi-key'] = 'deb952a4d1msh2cb04c7a49d71b4p1bc69ajsnd3415c1b5be4';
axios.defaults.headers['x-rapidapi-host'] = 'tasty.p.rapidapi.com';

async function initialLoad()
{
    try{
    const response = await axios.get('/recipes/list');
    let recipeList = response.data;
    console.log(recipeList);
    recipeModule.populateRecipeList(recipeList);
}
catch (err)
{
    console.error('error fetching recipes: '+ err);
}
    
}



initialLoad();


