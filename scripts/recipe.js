export function checkModule() {
    console.log("This is getting imported!");
}
let mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');
let recipeContainer = document.createElement('div');
let detailContainer = document.createElement('div');

export function populateRecipeList(recipe) {
    recipeContainer.classList.add('recipe-container');
    detailContainer.classList.add('detail-container');

    // Clear previous
    mainContainer.innerHTML = '';
    recipeContainer.innerHTML = '';
    detailContainer.innerHTML = '';

    // Recipe card
    let recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');

    let recipeName = document.createElement('h3');
    recipeName.textContent = recipe['strMeal'];

    let thumbnail = document.createElement('img');
    thumbnail.src = recipe['strMealThumb'];
    thumbnail.alt = recipe['strMeal'];
    thumbnail.classList.add('recipe-thumbnail');

    recipeCard.appendChild(recipeName);
    recipeCard.appendChild(thumbnail);
    recipeContainer.appendChild(recipeCard);

    // Recipe details
    const title = document.createElement('h2');
    title.textContent = recipe.strMeal;

    const area = document.createElement('p');
    area.textContent = `Area: ${recipe.strArea}`;

    const category = document.createElement('p');
    category.textContent = `Category: ${recipe.strCategory}`;

    const instructions = document.createElement('p');
    instructions.textContent = recipe.strInstructions;

    const ingredientsList = document.createElement('ul');
    ingredientsList.textContent = 'Ingredients:';

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

    // Append both to the page
    mainContainer.appendChild(recipeContainer);
    mainContainer.appendChild(detailContainer);
    
    // Then append mainContainer to the DOM
    document.body.appendChild(mainContainer);
}


