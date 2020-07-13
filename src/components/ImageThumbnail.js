import React from 'react';
import PropTypes from 'prop-types';

const ImageThumbnail = ({ src, title }) => {
  return (
    <div className="imageThumbnailWrapper">
      <img
        className='imageElement'
        src={src}
        alt={title}
      />
      {
        title
          ? <div className="imageName">
            {title}
          </div>
          : null
      }
    </div>
  );
};

export default ImageThumbnail;

ImageThumbnail.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string
};
