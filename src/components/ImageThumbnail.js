import React from 'react';

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
