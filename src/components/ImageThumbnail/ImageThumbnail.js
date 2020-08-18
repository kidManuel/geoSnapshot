import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const ImageThumbnail = ({ src, title, id, toggleCallback = () => { }, isSelected, isInGrid }) => {
  const classes = styles();
  const { imageThumbnailWrapper, imageElement, active, imageName, inGrid } = classes;

  return (
    <div
      className={`${imageThumbnailWrapper} ${isSelected ? active : 'inactive'} ${isInGrid ? inGrid : 'static'}`}
      onClick={() => toggleCallback(id)}
    >
      <img
        className={imageElement}
        src={src}
        alt={title}
      />
      {
        title
          ? <div className={imageName}>{title}</div>
          : null
      }
    </div>
  );
};

export default ImageThumbnail;

ImageThumbnail.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  toggleCallback: PropTypes.func,
  isSelected: PropTypes.bool,
  isInGrid: PropTypes.bool
};
