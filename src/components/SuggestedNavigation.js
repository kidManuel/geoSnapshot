import React from 'react';
import PropTypes from 'prop-types';

import { pickRandomSuggestions } from '../util/suggestionsList';

const SuggestedNavigation = ({ handleSubmit, history }) => {
  const suggestions = pickRandomSuggestions();
  return (
    <nav className="main-nav">
      <ul className="navSuggestionLink">
        {
          suggestions.map((singleSuggestion) => (
            <li className="navSuggestion" key={singleSuggestion}>
              <div
                className="navLink"
                onClick={
                  () => handleSubmit(singleSuggestion, history)
                }>{singleSuggestion}
              </div>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default SuggestedNavigation;

SuggestedNavigation.propTypes = {
  handleSubmit: PropTypes.func,
  history: PropTypes.object
};
