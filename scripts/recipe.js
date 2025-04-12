import { renderComments } from "./comments.js";

export function getRecipe(recipe) {
    const container = document.createElement('div');
    container.id = 'main-container';
    container.className = 'main-container';

    const recipeSection = document.createElement('div');
    recipeSection.className = 'recipe-container';

    const detailSection = document.createElement('div');
    detailSection.className = 'detail-container';

    const recipeCard = document.createElement('div');
    recipeCard.className = 'recipe-card';

    recipeCard.innerHTML = `
        <h3>${recipe.strMeal}</h3>
        <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" class="recipe-thumbnail">
    `;

    const ingredientsList = document.createElement('ul');
    ingredientsList.innerHTML = `<strong>Ingredients:</strong>`;
    for (let i = 1; i <= 20; i++) {
        const ing = recipe[`strIngredient${i}`];
        const meas = recipe[`strMeasure${i}`];
        if (ing && ing.trim()) {
            const li = document.createElement('li');
            li.textContent = `${meas} ${ing}`;
            ingredientsList.appendChild(li);
        }
    }

    detailSection.innerHTML = `
        <h2>${recipe.strMeal}</h2>
        <p><strong>Area:</strong> ${recipe.strArea}</p>
        <p><strong>Category:</strong> ${recipe.strCategory}</p>
        <p>${recipe.strInstructions}</p>
    `;
    detailSection.appendChild(ingredientsList);

    recipeSection.appendChild(recipeCard);
    container.appendChild(recipeSection);
    container.appendChild(detailSection);

    const commentsList = renderComments();
    container.appendChild(commentsList);

    // Replace old main container
    const oldContainer = document.getElementById('main-container');
    if (oldContainer) oldContainer.remove();

    document.body.appendChild(container);
}