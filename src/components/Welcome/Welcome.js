import React from 'react';

import { SpecialPage } from '../';
import styles from './styles';

const Welcome = () => {
  const classes = styles();
  return (
    <SpecialPage>
      <h2>Welcome to <span className={classes.welcomeGeo}>geoSnapShot!</span></h2>
      <h3>Try searching for anything!</h3>
    </SpecialPage>
  )
};

export default Welcome;
