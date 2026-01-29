import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const AppBar = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <nav style={{ padding: "10px", backgroundColor: "#f0f0f0", direction: "rtl" }}>
        
        <span style={{ marginLeft: "15px", fontWeight: "bold" }}>
          {user.name ? `שלום ${user.name}` : "שלום אורח"}
        </span>

        <Link to="/" style={{ marginRight: "10px" }}>דף בית</Link>
        <Link to="/RecipeList" style={{ marginRight: "10px" }}>רשימת מתכונים</Link>
        <Link to="/login" style={{ marginRight: "10px" }}>התחברות</Link>

      </nav>
    </div>
  );
};

export default AppBar;
