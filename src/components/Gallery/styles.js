import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
  imageGallery: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: '75vh',
    msAlignItems: 'flex-start',
    alignItems: 'center',
    overflowX: 'scroll'
  }
});

export default styles;
