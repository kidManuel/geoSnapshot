import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { pickRandomSuggestions } from '../util/suggestionsList';

const SuggestedNavigation = ({ handleSubmit, history }) => {
  const [suggestions, setSuggestions] = useState(pickRandomSuggestions());
  useEffect(() => {
    const unlisten = history.listen(() => {
      setSuggestions(pickRandomSuggestions());
    });
    return unlisten;
  });

  return (
    <nav className="navSuggestionWrapper">
      <div className="navSuggestionLabel">Try searching for...</div>
      <ul className="navSuggestionLinkList">
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
