import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import { Loader } from '../Loader';

const ImageThumbnail = ({ src, title, id, toggleCallback = () => { }, isSelected, disableAnimation = false }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [exists, setExists] = useState(true);

  const classes = styles();
  const {
    imageThumbnailWrapper,
    imageElement,
    active,
    imageName,
    interactive,
    destroy
  } = classes;

  const finishLoad = () => {
    setIsLoading(false);
  };

  const markAsFailure = () => {
    // TODO: Mark the id as blacklisted, never actually render this component instance.
    setExists(false);
  };

  return (
    <div
      className={ `${imageThumbnailWrapper} ${isSelected && active} ${(!disableAnimation) && interactive} ${(!exists) && destroy}` }
      onClick={ () => toggleCallback(id) }
    >
      <img
        className={ imageElement }
        src={ src }
        alt={ title }
        onLoad={ finishLoad }
        onError={ markAsFailure }
      />
      {title && <div className={ imageName }>{title}</div>}
      {isLoading && <Loader />}
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
