import React from 'react';
import './Nav_bar.css';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const NavBar = ({ navigateTo, activePage }) => {
  return (
    <div className="NavBar">
      <button onClick={() => navigateTo("ingredients")}>
        <span
          className={`material-icons ${activePage === "ingredients" ? "active" : ""}`}
        >
          liquor
        </span>
      </button>
      <button onClick={() => navigateTo("inspiration")}>
        <span
          className={`material-icons ${activePage === "inspiration" ? "active" : ""}`}
        >
          lightbulb
        </span>
      </button>
      <button onClick={() => navigateTo("main")}>
        <span
          className={`material-icons ${activePage === "main" ? "active" : ""}`}
        >
          local_bar
        </span>
      </button>
      <button onClick={() => navigateTo("favourites")}>
        <span
          className={`material-icons ${activePage === "favourites" ? "active" : ""}`}
        >
          favorite_border
        </span>
      </button>
      <button onClick={() => navigateTo("settings")}>
        <span
          className={`material-icons ${activePage === "settings" ? "active" : ""}`}
        >
          settings
        </span>
      </button>
    </div>
  );
};

export default NavBar;
