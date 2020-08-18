import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { suggestionsList } from '../../util/const'
import styles from './styles';

const SuggestedNavigation = ({ handleSubmit, history }) => {

  const shuffleArray = (array) => {
    // stolen from stackoverflow...
    const newArray = [...array];
    let currentIndex = newArray.length;
    let temporaryValue, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = newArray[currentIndex];
      newArray[currentIndex] = newArray[randomIndex];
      newArray[randomIndex] = temporaryValue;
    }
    return newArray;
  };

  const pickRandomSuggestions = (ammount = 5) => {
    return shuffleArray(suggestionsList).slice(0, ammount + 1);
  };

  const [suggestions, setSuggestions] = useState(pickRandomSuggestions());

  useEffect(() => {
    const unlisten = history.listen(() => {
      setSuggestions(pickRandomSuggestions());
    });
    return unlisten;
  });

  const classes = styles();
  const {
    navSuggestionWrapper,
    navSuggestionLabel,
    navSuggestionLinkList,
    navSuggestion,
    navLink
  } = classes;

  return (
    <nav className={navSuggestionWrapper}>
      <div className={navSuggestionLabel}>Try searching for...</div>
      <ul className={navSuggestionLinkList}>
        {
          suggestions.map((singleSuggestion) => (
            <li className={navSuggestion} key={singleSuggestion}>
              <div
                className={navLink}
                onClick={() => handleSubmit(singleSuggestion, history)}>{singleSuggestion}
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
