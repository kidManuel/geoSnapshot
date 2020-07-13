import React from 'react';
import PropTypes from 'prop-types';

import { Form, Navigation } from './';

const Header = ({ history, handleSubmit }) => {
  return (
    <div>
      <h1>SnapShot</h1>
      <Form history={history} handleSubmit={handleSubmit} />
      <Navigation />
    </div>
  );
};

export default Header;

Header.propTypes = {
  history: PropTypes.object,
  handleSubmit: PropTypes.func
};
