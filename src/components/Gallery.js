import React from 'react';
import PropTypes from 'prop-types';

import { NoImages, ImageThumbnail } from './';

const Gallery = ({ data, toggleImageCallback, selectedImages }) => {
  const isImageSelected = (image) => {
    return !!selectedImages.find((element) => element.id === image.id);
  };

  return (
    <div className='imageGallery styledScrollbar'>
      {
        data.length
          ? data.map(image => (
            <ImageThumbnail
              key={image.id}
              data={image}
              toggleCallback={toggleImageCallback}
              isSelected={isImageSelected(image)}
              isInGrid={true}
            />))
          : <NoImages />
        // return 'not found' component if no images fetched
      }
    </div>
  );
};

export default Gallery;

Gallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.object
  ),
  selectedImages: PropTypes.arrayOf(
    PropTypes.object
  ),
  toggleImageCallback: PropTypes.func
};
