import React, { useState, useContext } from 'react';
import { RecipeContext } from "../context/RecipeContext";
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const { recipes, addRecipe, toggleFavorite } = useContext(RecipeContext);

  const [showModal, setShowModal] = useState(false);
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    prepTime: "",
    ingredients: "",
    category: "חלבי",
    isFavorite: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ingredientsArray = newRecipe.ingredients.split(',').map(i => i.trim());
    addRecipe({ 
      ...newRecipe, 
      prepTime: parseInt(newRecipe.prepTime), 
      ingredients: ingredientsArray 
    });
    setNewRecipe({ name: "", prepTime: "", ingredients: "", category: "חלבי", isFavorite: false });
    setShowModal(false);
  };

  return (
    <div style={containerStyle}>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={boxStyle}>
          <Link
            to={`/recipes/${recipe.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <h3>{recipe.name}</h3>
            <p>{recipe.prepTime} דקות</p>
            <small style={{ color: recipe.category === 'בשרי' ? 'red' : 'blue' }}>
              {recipe.category}
            </small>
          </Link>
          <button
            onClick={() => toggleFavorite(recipe.id)}
            style={favoriteButtonStyle}
          >
            {recipe.isFavorite ? "מועדף" : "הוסף למועדפים"}
          </button>
        </div>
      ))}

      <button style={addButtonStyle} onClick={() => setShowModal(true)}>
        הוסף מתכון חדש
      </button>

      {}
      {showModal && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <h3>הוסף מתכון חדש</h3>
            <form onSubmit={handleSubmit} style={formStyle}>
              <input
                name="name"
                placeholder="שם המתכון"
                value={newRecipe.name}
                onChange={handleChange}
                required
              />
              <input
                name="prepTime"
                placeholder="זמן הכנה בדקות"
                type="number"
                value={newRecipe.prepTime}
                onChange={handleChange}
                required
              />
              <select
                name="category"
                value={newRecipe.category}
                onChange={handleChange}
                required
              >
                <option value="חלבי">חלבי</option>
                <option value="בשרי">בשרי</option>
                <option value="פרווה">פרווה</option>
              </select>
              <input
                name="ingredients"
                placeholder="מרכיבים מופרדים בפסיקים"
                value={newRecipe.ingredients}
                onChange={handleChange}
                required
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <button type="submit" style={modalSubmitButton}>שמור מתכון</button>
                <button type="button" style={modalCancelButton} onClick={() => setShowModal(false)}>בטל</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '15px',
  padding: '20px',
  direction: 'rtl',
};

const boxStyle = {
  width: '150px',
  height: '180px',
  border: '2px solid #333',
  borderRadius: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f9f9f9',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  padding: '10px',
  textAlign: 'center',
  position: 'relative'
};

const favoriteButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: 'transparent',
  border: '1px solid #333',
  borderRadius: '6px',
  padding: '4px 8px',
  cursor: 'pointer'
};

const addButtonStyle = {
  marginTop: '20px',
  padding: '12px 24px',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: 'brown', 
  color: 'white',
  cursor: 'pointer',
  fontSize: '16px'
};

const modalOverlay = {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000
};

const modalContent = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '12px',
  width: '300px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px'
};

const modalSubmitButton = {
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  padding: '8px',
  cursor: 'pointer'
};

const modalCancelButton = {
  backgroundColor: '#f44336',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  padding: '8px',
  cursor: 'pointer'
};

export default RecipeList;
