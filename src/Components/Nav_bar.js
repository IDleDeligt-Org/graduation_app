import React from 'react';
import './Nav_bar.css';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const NavBar = ({ navigateTo }) => {
  return (
    <div className='NavBar'>
      <button onClick={() => navigateTo('ingredients')}><span class="material-icons">liquor</span></button>
      <button onClick={() => navigateTo('inspiration')}><span class="material-icons">lightbulb</span></button>
      <button onClick={() => navigateTo('main')}><span class="material-icons">local_bar</span></button>
      <button onClick={() => navigateTo('favourites')}><span class="material-icons">favorite_border</span></button>
      <button onClick={() => navigateTo('settings')}><span class="material-icons">settings</span></button>
    </div>
  );
};

export default NavBar;
