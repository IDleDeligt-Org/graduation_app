import React from 'react';
import './Nav_bar.css';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ navigateTo, navigateToMain, activePage }) => {
  const navigate = useNavigate();
  return (
    <div className="NavBar">
      <button
        onClick={() => navigate("/ingredients")}
        className={activePage === "ingredients" ? "active" : ""}
      >
        <span className={`material-icons ${activePage === "ingredients" ? "active" : ""}`}>blender</span>
      </button>
      <button
        onClick={() => navigate("/inspiration")}
        className={activePage === "inspiration" ? "active" : ""}
      >
        <span className={`material-icons ${activePage === "inspiration" ? "active" : ""}`}>lightbulb_outline</span>
      </button>
      <button
        onClick={() => navigate("/main")}
        className={activePage === "main" ? "active" : ""}
      >
        <span className={`material-icons ${activePage === "main" ? "active" : ""}`}>local_bar</span>
      </button>
      <button
        onClick={() => navigate("/favorites")}
        className={activePage === "favorites" ? "active" : ""}
      >
        <span className={`material-icons ${activePage === "favorites" ? "active" : ""}`}>favorite_border</span>
      </button>
      <button
        onClick={() => navigate("/login")}
        className={activePage === "settings" ? "active" : ""}
      >
        <span className={`material-icons ${activePage === "settings" ? "active" : ""}`}>settings</span>
      </button>
    </div>
  );
};

export default NavBar;