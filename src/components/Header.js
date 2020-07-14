import React from 'react';
import PropTypes from 'prop-types';

import { Form, SuggestedNavigation } from './';

const Header = ({ history, handleSubmit }) => {
  return (
    <div>
      <h1>SnapShot</h1>
      <Form history={history} handleSubmit={handleSubmit} />
      <SuggestedNavigation handleSubmit={handleSubmit} history={history} />
    </div>
  );
};

export default Header;

Header.propTypes = {
  history: PropTypes.object,
  handleSubmit: PropTypes.func
};
