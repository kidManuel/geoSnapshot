import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
  imageThumbnailWrapper: {
    overflow: 'hidden',
    marginBottom: 15,
    margin: 3,
    borderRadius: 5,
    position: 'relative',
    lineHeight: 0,
    border: 'solid 2px rgba(255, 255, 255, 0)',
    transition: 'border 0.3s',
    cursor: 'pointer',
    minHeight: 50,
    minWidth: '13%',
    width: '13%',
    '&:hover': {
      border: 'solid 2px rgba(255, 255, 255, .8)'
    },
    '&:hover $imageElement': {
      transform: 'scale(1.35)'
    }
  },
  active: {
    border: 'solid 3px #03DAC5'
  },
  interactive: {
    '& $imageName': {
      bottom: '-100%'
    },
    '&:hover $imageName': {
      bottom: '0%'
    }
  },
  imageName: {
    width: '100%',
    backgroundColor: '#1f1f1f',
    color: '#03DAC5',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    padding: '5px 20px',
    boxSizing: 'border-box',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    transition: 'all 0.4s',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: 14,
    lineHeight: '16px'
  },
  imageElement: {
    width: '100%',
    transform: 'scale(1)',
    transition: 'transform 0.5s'
  },
  destroy: {
    display: 'none'
  }
});

export default styles;
