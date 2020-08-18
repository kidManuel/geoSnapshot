import React from 'react';
import PropTypes from 'prop-types';

import { NoImages, FlickrImageThumbnail } from '../';
import styles from './styles';
import { scrollbarStyle } from '../StyledScrollbar';

const Gallery = ({ data, toggleImageCallback, selectedImages }) => {
  const isImageSelected = (id) => {
    return !!selectedImages.find((element) => element === id);
  };

  const classes = styles();
  const scrollbar = scrollbarStyle();

  return (
    <div className={`${classes.imageGallery} ${scrollbar.styledScrollbar}`}>
      {
        data.length
          ? data.map(image => (
            <FlickrImageThumbnail
              data={image}
              toggleImageCallback={toggleImageCallback}
              isToggled={isImageSelected(image.id)}
              key={image.id}
            />)
          )
          : <NoImages />

        // return 'not found' component if no images fetched
      }
    </div>
  );
};

export default Gallery;

Gallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  selectedImages: PropTypes.arrayOf(PropTypes.string),
  toggleImageCallback: PropTypes.func
};
