let mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');
let recipeContainer = document.createElement('div');
let detailContainer = document.createElement('div');

export function getRecipe(recipe) {
    recipeContainer.classList.add('recipe-container');
    detailContainer.classList.add('detail-container');

    // Clear previous recipe details
    mainContainer.innerHTML = '';
    recipeContainer.innerHTML = '';
    detailContainer.innerHTML = '';

    // creating recipe card
    let recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');
    //creating recipe name/title
    let recipeName = document.createElement('h3');
    recipeName.textContent = recipe['strMeal'];
    //creating thumbnail image
    let thumbnail = document.createElement('img');
    thumbnail.src = recipe['strMealThumb'];
    thumbnail.alt = recipe['strMeal'];
    thumbnail.classList.add('recipe-thumbnail');

    recipeCard.appendChild(recipeName);
    recipeCard.appendChild(thumbnail);
    recipeContainer.appendChild(recipeCard);

    // creating Recipe details
    const title = document.createElement('h2');
    title.textContent = recipe.strMeal;

    const area = document.createElement('p');
    area.textContent = `Area: ${recipe.strArea}`;
    area.style.fontWeight ="Bold";

    const category = document.createElement('p');
    category.textContent = `Category: ${recipe.strCategory}`;
    category.style.fontWeight ="Bold";

    const instructions = document.createElement('p');
    instructions.textContent = recipe.strInstructions;

    const ingredientsList = document.createElement('ul');
    ingredientsList.textContent = 'Ingredients:';
    //checking for ingredients if its empty
    for (let i = 1; i <= 20; i++) {
        const ingredient = recipe[`strIngredient${i}`];
        const measure = recipe[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== '') {
            const item = document.createElement('li');
            item.textContent = `${measure} ${ingredient}`;
            ingredientsList.appendChild(item);
        }
    }

    detailContainer.appendChild(title);
    detailContainer.appendChild(area);
    detailContainer.appendChild(category);
    detailContainer.appendChild(ingredientsList);
    detailContainer.appendChild(instructions);

    // Appending both to the main container 
    mainContainer.appendChild(recipeContainer);
    mainContainer.appendChild(detailContainer);
    
    // appending mainContainer to the DOM
    document.body.appendChild(mainContainer);
}


