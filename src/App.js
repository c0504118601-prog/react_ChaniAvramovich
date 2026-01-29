import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import Login from './components/Login';
import AppBar from './components/AppBar';
import { UserProvider } from './context/UserContext';
import './App.css';

import { RecipeProvider } from './context/RecipeContext';

function App() {
  console.log("App רץ");
  return (
    <div className="App">
   <UserProvider>
    <RecipeProvider>
      <Router>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/RecipeList" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </RecipeProvider>
    </UserProvider>
  </div>
);
}

export default App;
