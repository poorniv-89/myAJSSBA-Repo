export function checkModule() {
    console.log("This is getting imported!");
}
let recipeContainer = document.createElement('div');
export function populateRecipeList(recipeList) {

    recipeContainer.classList.add('recipe-container');
    recipeList.results.forEach(recipe => {
        let recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        let recipeName = document.createElement('h3');
        recipeName.textContent = recipe['name'];
        let recipeLink = document.createElement('a');
        recipeLink.href = '#';
        let recipeID = recipe['id'];
        console.log(recipeID);
        let thumbnail = document.createElement('img');
        thumbnail.src = recipe['thumbnail_url'];
        thumbnail.alt = recipe['name'];
        thumbnail.classList.add('recipe-thumbnail');

        recipeCard.appendChild(recipeName);
        recipeCard.appendChild(thumbnail);

        recipeLink.appendChild(recipeCard);
        recipeContainer.appendChild(recipeLink);
        console.log(recipeCard);
        recipeLink.addEventListener('click', (e) => {
            getRecipeDetails(e, recipeID);
        });
    });
    document.body.appendChild(recipeContainer);


}

async function getRecipeDetails(e, recipeID) {
    clearRecipeContainer();
    try {
        let response = await axios.get('/recipes/get-more-info', {
            params: {
                id: recipeID 
            }
        });
        console.log(response.data);
    }
    catch(err)
    {
        console.error('error recipeID not found: '+ err);
    }
   
}

function clearRecipeContainer() {
    if (recipeContainer) {
        while (recipeContainer.firstChild) {
            recipeContainer.removeChild(recipeContainer.firstChild);
        }
    }
    else
        console.log("No content displayed!")

}