import React, { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import { useParams, Link } from 'react-router-dom';

const RecipeDetails = () => {
  const { id } = useParams(); 
  const { recipes } = useContext(RecipeContext);

  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) return <p>מתכון לא נמצא</p>;

  return (
    <div style={{ padding: '20px', direction: 'rtl' }}>
      <h2>{recipe.name}</h2>
      <p>זמן הכנה: {recipe.prepTime} דקות</p>
      <p>קטגוריה: {recipe.category}</p>
      <h4>מרכיבים:</h4>
      <ul>
        {recipe.ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>
      <Link to="/RecipeList">חזרה לרשימת המתכונים</Link>
    </div>
  );
};

export default RecipeDetails;
