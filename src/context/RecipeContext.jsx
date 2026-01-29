import { createContext,useState,useRef  } from "react";

export const RecipeContext = createContext();
 
export const RecipeProvider=({children})=>{
    const nextId = useRef(1);
    const [recipes, setRecipes] = useState ([
        {
          id: nextId.current++,
          name: "פסטה שמנת פטריות",
          prepTime: 30,
          ingredients: ["פסטה", "שמנת מתוקה", "פטריות", "שום", "מלח", "פלפל"],
          category: "חלבי",
          isFavorite: true
        },
        {
          id:nextId.current++,
          name: "שניצל עוף",
          prepTime: 45,
          ingredients: ["חזה עוף", "פירורי לחם", "ביצה", "קמח", "מלח", "שמן"],
          category: "בשרי",
          isFavorite: false
        },
        {
          id: nextId.current++,
          name: "סלט ירקות",
          prepTime: 15,
          ingredients: ["עגבניה", "מלפפון", "בצל", "שמן זית", "לימון", "מלח"],
          category: "פרווה",
          isFavorite: true
        },
        {
          id: nextId.current++,
          name: "לזניה גבינות",
          prepTime: 60,
          ingredients: ["עלי לזניה", "גבינה צהובה", "ריקוטה", "רוטב עגבניות"],
          category: "חלבי",
          isFavorite: false
        },
        {
          id:nextId.current++,
          name: "קציצות בקר",
          prepTime: 50,
          ingredients: ["בשר בקר טחון", "בצל", "פטרוזיליה", "ביצה", "מלח", "פלפל"],
          category: "בשרי",
          isFavorite: true
        }
      ]);

      const addRecipe = (recipe) => {
        setRecipes((prev) => [
          ...prev,
          { uid: nextId.current++, ...recipe }
        ]);
      };
      const toggleFavorite = (id) => {
        setRecipes((prev) =>
          prev.map((r) =>
            r.id === id ? { ...r, isFavorite: !r.isFavorite } : r
          )
        );
      };
      
  return(
    <RecipeContext.Provider value={{ recipes, addRecipe, toggleFavorite }}>
  {children}
</RecipeContext.Provider>
  ) ;   
};

 
  
  
  
  
  
  