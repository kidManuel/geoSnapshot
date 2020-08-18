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
    marginRight: 50,
    color: '#1f1f1f',
    cursor: 'pointer'
  },
  geo: {
    fontWeight: '200',
    fontSize: 20,
    textDecoration: 'none'
  },
  snapshot: {
    fontSize: 20,
    fontWeight: '900',
    textDecoration: 'none'
  },
  headerMain: {
    flexGrow: 1
  }
});

export default styles;
