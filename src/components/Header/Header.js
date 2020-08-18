import React from 'react';
import PropTypes from 'prop-types';

import { Form, SuggestedNavigation } from '../';
import styles from './styles';

const Header = ({ history, handleSubmit }) => {
  const classes = styles();
  const { pageHeader, pageLogo, geo, snapshot, headerMain } = classes;

  return (
    <div className={ pageHeader }>
      <div
        className={ pageLogo }
        onClick={ () => handleSubmit('', history) }
      >
        <span className={ geo }>geo</span><span className={ snapshot }>SNAPSHOT</span>
      </div>
      <div className={ headerMain }>
        <Form history={ history } handleSubmit={ handleSubmit } />
        <SuggestedNavigation handleSubmit={ handleSubmit } history={ history } />
      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  history: PropTypes.object,
  handleSubmit: PropTypes.func
};
