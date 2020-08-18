import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
  pageHeader: {
    padding: 20,
    backgroundColor: '#03DAC5',
    display: 'flex',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },
  pageLogo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginRight: '50px',
    color: '#1f1f1f',
    cursor: 'pointer'
  },
  geo: {
    fontWeight: '200',
    fontSize: '20px',
    textDecoration: 'none'
  },
  snapshot: {
    fontSize: '20px',
    fontWeight: '900',
    textDecoration: 'none'
  },
  headerMain: {
    flexGrow: 1
  }
});

export default styles;
