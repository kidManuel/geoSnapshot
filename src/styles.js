const styles = {
  snapShotContainer: {
    /* Super ugly selector, but google-maps-react creates a non-configurable div we need to target    */
    /* https://github.com/fullstackreact/google-maps-react/blob/master/src/GoogleApiComponent.js      */
    /* Line 129                                                                                       */
    '&>div:nth-child(3)': {
      height: '88vh',
      width: '90vw',
      right: 0,
      position: 'absolute',
      top: '12vh',
      transition: 'right 0.4s',
    },

    '&.active>div:nth-child(3)': {
      right: '-90vw',
    },
  }
}
export default styles;
