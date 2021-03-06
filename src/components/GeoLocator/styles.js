import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
  markerImage: {},
  geoWrapper: {
    display: 'flex',
    width: '100%',
    height: '100%',
    '& $markerImage': {
      position: 'absolute',
      bottom: 10,
      left: 10,
      width: '20%',
    }
  },
  toggleButton: {
    height: '100%',
    width: '3vw',
    display: 'flex',
    position: 'absolute',
    left: '-3vw',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.4s',
    cursor: 'pointer',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,

    '&:hover': {
      backgroundColor: '#03DAC5'
    },
    '&:hover $iconToggle': {
      fill: '#1f1f1f'
    }
  },
  iconToggle: {
    fill: '#03DAC5',
    transition: 'fill 0.4s',
    transform: 'rotate(0deg)'
  },
  svgIcon: {},
  expanded: {
    '& $svgIcon': {
      transform: 'rotate(-180deg)',
    }
  }
});

export default styles;
