import React from 'react';
import PropTypes from 'prop-types';

import { NoImages, ImageThumbnail } from './';

const Gallery = ({ data }) => {
  const prepImage = (image) => {
    const farm = image.farm;
    const server = image.server;
    const id = image.id;
    const secret = image.secret;
    const title = image.title;
    const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
    return <ImageThumbnail className='imageElement' src={url} title={title} />;
  };

  // map variables to each item in fetched image array and return image component
  return (
    <div className="imageGallery">
      {
        data.length
          ? <ul className="imageList"> {
            data.map(image =>
              <li key={image.id} className="singleImage">
                {
                  prepImage(image)
                }
              </li>)
          }
          </ul>
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
  )
};
