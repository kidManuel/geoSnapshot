import React from 'react';

import styles from './styles';

const Loader = () => {
  const classes = styles();
  return (
    <div className={classes.loader} />
  );
};

export default Loader;
