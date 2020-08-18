import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
  loader: {
    border: '16px solid #f3f3f3',
    /* Light grey */
    borderTop: '16px solid #051c33',
    /* Blue */
    borderRadius: '50%',
    width: '120px',
    height: '120px',
    animation: 'spin 2s linear infinite',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  '@keyframes spin': {
    from: {
      transform: 'rotate(0deg)'
    },
    to: {
      transform: 'rotate(360deg)'
    }
  }
});

export default styles;
