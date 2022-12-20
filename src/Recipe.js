import { useEffect, useState } from 'react';
import recipes from './recipes.json';

const fetchRecipes = () => {
    return recipes;
  };

  const RecipeContainer = () => {
    console.log(fetchRecipes());

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
      const recipes = fetchRecipes();
      console.log('RecipeContainer: useEffect: recipes: ', recipes);
      setRecipes(recipes);
    }, []);
    
    return(
      <div className="recipe-container">
        <h1 className="title" >Our Recipies</h1>
        <br />
        <ul className ="recipe-list">
        {recipes.map(recipe => (
          <li key={recipe.uuid} className="recipe">
            <p><b>{recipe.name}</b> ({recipe.difficulty})</p>
            <p><b>By {recipe.author}</b></p><br />
            <img src={recipe.images} alt={recipe.name} width={250} height={250}/> <br />  
            <p><b>Description</b></p>
            <p>{recipe.description}</p><br />

            <p><b>Ingredients</b></p>
            <p>{recipe.ingredientss}</p><br />
            <p><b>Instructions</b></p>
            <p>{recipe.instructionss}</p>
          </li>
        ))}
      </ul> 
      </div>
    );
  };
  
  export default RecipeContainer;