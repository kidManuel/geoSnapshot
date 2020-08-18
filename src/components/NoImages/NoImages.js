import React from 'react';

import styles from './styles';

const NoImages = () => {
  const classes = styles();

  return (
    <div className={ classes.specialPage }>
      <h2>No Images Found</h2>
      <p>Please try a different search term</p>
    </div>
  );
};

export default NoImages;
