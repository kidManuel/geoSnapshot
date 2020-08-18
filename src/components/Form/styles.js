import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
  searchForm: {
    display: 'flex',
    flexGrow: 1
  },
  searchInput: {
    fontSize: '16px',
    backgroundColor: '#edeff0',
    padding: '5px 15px',
    border: 0,
    borderRight: 'none',
    borderRadius: '5px 0 0 5px',
    outline: 'none',
    width: '100%'
  },
  searchButton: {
    outline: 'none',
    border: 'none',
    padding: '0px 15px',
    borderRadius: '0 0.35em 0.35em 0',
    cursor: 'pointer',
    backgroundColor: '#1f1f1f',
    transition: 'all 0.3s',
    '&.active .searchIcon path': {
      transform: 'scale(1.1)',
      fill: '#03DAC5'
    }
  }

});

export default styles;
