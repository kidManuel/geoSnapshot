import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const CategoryTooltip = ({ pickAll, pickNone, showTooltip, currentSearch }) => {
  const classes = styles();
  const {
    categoryInfo,
    categoryTitle,
    searchQueryInCategory,
    displayOptions,
    massSelector,
    selectionTooltip,
  } = classes;

  return (
    <div className={categoryInfo}>
      <h2 className={categoryTitle}>Showing pictures of: <span className={searchQueryInCategory}>{currentSearch}</span></h2>
      <div className={displayOptions}>
        <h3
          className={massSelector}
          onClick={pickAll}
        >
          Pick All
        </h3>
        <h3
          className={massSelector}
          onClick={pickNone}
        >
          Clear Selection
        </h3>
      </div>
      <div className={`${selectionTooltip} ${showTooltip ? 'active' : 'inactive'}`}>See your selections in the map! → </div>
    </div>
  )
};

export default CategoryTooltip;

CategoryTooltip.propTypes = {
  pickAll: PropTypes.func,
  pickNone: PropTypes.func,
  showTooltip: PropTypes.bool,
  currentSearch: PropTypes.string,
};
