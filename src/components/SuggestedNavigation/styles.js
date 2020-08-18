import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
  navSuggestionWrapper: {
    marginTop: 15,
    flexBasis: '100%',
    display: 'flex',
    alignItems: 'center'
  },

  navSuggestionLinkList: {
    display: 'flex'
  },

  navLink: {
    padding: 5,
    cursor: 'pointer',
    fontWeight: 700,
    margin: '0 5px',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  navSuggestion: {
    '&.active': {
      backgroundColor: '#051c33'
    }
  }
});

export default styles;
