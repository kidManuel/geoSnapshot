import { createUseStyles } from 'react-jss';

const scrollbarStyle = createUseStyles({
  styledScrollbar: {
    scrollbarWidth: 'thin',
    scrollbarColor: 'rgba(19, 19, 19, 0.7) rgba(18, 18, 18, 0.3)',
    '&::-webkit-scrollbar': {
      width: 6,
      height: 6
    },
    '&::-webkit-scrollbar-track': {
      background: '#606368',
      borderRadius: 3
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#03DAC5',
      borderRadius: 6
    }
  }
});

export default scrollbarStyle;
