import React from 'react';
import PropTypes from 'prop-types';

import { Form, SuggestedNavigation } from './';

const Header = ({ history, handleSubmit }) => {
  return (
    <div className='pageHeader'>
      <div className='pageLogo'>
        <span id='geo'>geo</span><span id='snapshot'>SNAPSHOT</span>
      </div>
      <div className='headerMain'>
        <Form history={history} handleSubmit={handleSubmit} />
        <SuggestedNavigation handleSubmit={handleSubmit} history={history} />
      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  history: PropTypes.object,
  handleSubmit: PropTypes.func
};
