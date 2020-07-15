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

  const prepLabelString = () => {
    if (title.length > 50) {
      return `${title.slice(0, 45)}...`
    }
    return title;
  }

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
            {prepLabelString()}
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
    server: PropTypes.string,
    id: PropTypes.string,
    secret: PropTypes.string,
    title: PropTypes.string
  }),
  toggleCallback: PropTypes.func,
  isSelected: PropTypes.bool
};
