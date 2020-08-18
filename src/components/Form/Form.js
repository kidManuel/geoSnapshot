import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Form = ({ handleSubmit, history }) => {
  const [currentValue, setCurrentValue] = useState('');
  useEffect(() => {
    const unlisten = history.listen(() => {
      setCurrentValue('');
    });

    return unlisten;
  }, [history]);

  // update search text state
  const updateSearchInputValue = e => {
    setCurrentValue(e.target.value);
  };

  const formSubmit = (event) => {
    handleSubmit(currentValue, history, event);
  };

  const classes = styles();
  const {
    searchForm,
    searchInput,
    searchButton
  } = classes;

  return (
    <form
      className={searchForm}
      onSubmit={event => formSubmit(event)}
    >
      <input
        type='text'
        name='search'
        placeholder='Search...'
        onChange={updateSearchInputValue}
        value={currentValue}
        className={searchInput}
      />
      <button
        type='submit'
        className={`${searchButton} ${currentValue.trim() ? 'active' : null}`}
        disabled={!currentValue.trim()}
      >
        <svg className='searchIcon' height='32' width='32'>
          <path
            d='M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z'
            fill='#ffffff'
            fillRule='evenodd'
          />
        </svg>
      </button>
    </form>
  );
};

export default Form;

Form.propTypes = {
  history: PropTypes.object,
  handleSubmit: PropTypes.func
};
