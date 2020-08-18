import { createUseStyles } from 'react-jss';

const styles = createUseStyles({

  categoryTitle: {
    height: '8vh',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    fontSize: 35,
  },
  categoryInfo: {
    display: 'flex',
    width: '80vw',
    margin: '0 auto',
    justifyContent: 'space-between',
    alignItems: 'center',
    opacity: '1',

    '&.inactive': {
      opacity: 0,
    }
  },
  massSelector: {
    color: 'white',
    marginLeft: 25,
    fontWeight: '900',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    }
  },
  selectionTooltip: {
    fontSize: '20px',
    color: '#03DAC5',
    opacity: 0,
    transition: 'opacity 0.3s',
    '&.inactive': {
      opacity: 1,
    }
  },
  displayOptions: {
    display: 'flex',
  },
  searchQueryInCategory: {
    fontWeight: 900,
    marginLeft: 15,
    color: '#03DAC5',
  }
})

export default styles;
