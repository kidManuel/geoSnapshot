import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul className="navSuggestionLink">
        <li className="navSuggestion"><NavLink className="navLink" to="/mountain">Mountain</NavLink></li>
        <li className="navSuggestion"><NavLink className="navLink" to="/beach">Beaches</NavLink></li>
        <li className="navSuggestion"><NavLink className="navLink" to="/bird">Birds</NavLink></li>
        <li className="navSuggestion"><NavLink className="navLink" to="/food">Food</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation;
