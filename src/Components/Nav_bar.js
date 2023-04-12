import React from 'react';
import './Nav_bar.css';

const NavBar = ({ navigateTo }) => {
  return (
    <div className='NavBar'>
      <button onClick={() => navigateTo('ingredients')}>Ingredients</button>
      <button onClick={() => navigateTo('inspiration')}>Inspiration</button>
      <button onClick={() => navigateTo('main')}>Main</button>
      <button onClick={() => navigateTo('favourites')}>Favourites</button>
      <button onClick={() => navigateTo('settings')}>Settings</button>
    </div>
  );
};

export default NavBar;
