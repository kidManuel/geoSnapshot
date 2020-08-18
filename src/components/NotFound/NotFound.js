import React from 'react';

import styles from './styles';

const NotFound = () => {
  const classes = styles();

  return (
    <div className={ classes.notFound }>
      <h2>Page Not Found</h2>
    </div>
  );
};

export default NotFound;
