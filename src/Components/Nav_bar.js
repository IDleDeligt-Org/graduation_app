import React from 'react';
import './Nav_bar.css';

const NavBar = ({ navigateTo, activePage }) => {
  return (
    <div className="NavBar">
      <button
        onClick={() => navigateTo("ingredients")}
        className={activePage === "ingredients" ? "active" : ""}
      >
        <span className={`material-icons ${activePage === "ingredients" ? "active" : ""}`}>liquor</span>
      </button>
      <button
        onClick={() => navigateTo("inspiration")}
        className={activePage === "inspiration" ? "active" : ""}
      >
        <span className={`material-icons ${activePage === "inspiration" ? "active" : ""}`}>lightbulb_outline</span>
      </button>
      <button
        onClick={() => navigateTo("main")}
        className={activePage === "main" ? "active" : ""}
      >
        <span className={`material-icons ${activePage === "main" ? "active" : ""}`}>local_bar</span>
      </button>
      <button
        onClick={() => navigateTo("favorites")}
        className={activePage === "favorites" ? "active" : ""}
      >
        <span className={`material-icons ${activePage === "favorites" ? "active" : ""}`}>favorite_border</span>
      </button>
      <button
        onClick={() => navigateTo("settings")}
        className={activePage === "settings" ? "active" : ""}
      >
        <span className={`material-icons ${activePage === "settings" ? "active" : ""}`}>settings</span>
      </button>
    </div>
  );
};

export default NavBar;