import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({ handleSubmit, history }) => {
  return (
    <nav className="main-nav">
      <ul className="navSuggestionLink">
        <li className="navSuggestion">
          <div
            className="navLink"
            onClick={
              () => handleSubmit('Mountain', history)
            }>Mountain
          </div>
        </li>
        <li className="navSuggestion">
          <div
            className="navLink"
            onClick={
              () => handleSubmit('Beaches', history)
            }>Beaches
          </div>
        </li>
        <li className="navSuggestion">
          <div
            className="navLink"
            onClick={
              () => handleSubmit('Birds', history)
            }>Birds
          </div>
        </li>
        <li className="navSuggestion">
          <div
            className="navLink"
            onClick={
              () => handleSubmit('Food', history)
            }>Food
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

Navigation.propTypes = {
  handleSubmit: PropTypes.func,
  history: PropTypes.object
};
