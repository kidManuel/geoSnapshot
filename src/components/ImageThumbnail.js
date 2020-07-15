import React from 'react';
import PropTypes from 'prop-types';

const ImageThumbnail = ({ data, toggleCallback, isSelected }) => {
  const {
    farm,
    server,
    id,
    secret,
    title
  } = data;

  const getSrcUrl = () => {
    return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
  };

  return (
    <div
      className={`imageThumbnailWrapper ${isSelected ? 'active' : 'inactive'}`}
      onClick={() => toggleCallback(data)}
    >
      <img
        className='imageElement'
        src={getSrcUrl()}
        alt={title}
      />
      {
        title
          ? <div className='imageName'>
            {title}
          </div>
          : null
      }
    </div>
  );
};

export default ImageThumbnail;

ImageThumbnail.propTypes = {
  data: PropTypes.shape({
    farm: PropTypes.number,
    server: PropTypes.number,
    id: PropTypes.number,
    secret: PropTypes.number,
    title: PropTypes.string
  }),
  toggleCallback: PropTypes.func,
  isSelected: PropTypes.bool
};
