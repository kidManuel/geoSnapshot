import React from 'react';

import styles from './styles';

const SpecialPage = ({ children }) => {
  const classes = styles();

  return (
    <div className={classes.specialPage}>
      {children}
    </div>
  );
};

export default SpecialPage;
