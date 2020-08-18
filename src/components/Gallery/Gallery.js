import React from 'react';
import PropTypes from 'prop-types';

import { NoImages, ImageThumbnail } from '../';
import styles from './styles';
import { scrollbarStyle } from '../StyledScrollbar';

const Gallery = ({ data, toggleImageCallback, selectedImages }) => {
  const isImageSelected = (id) => {
    return !!selectedImages.find((element) => element === id);
  };

  const classes = styles();
  const scrollbar = scrollbarStyle();

  const prepImageThumbnail = (image) => {
    const { farm, server, id, secret, title } = image;

    const getSrcUrl = () => {
      return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
    };

    const prepLabelString = () => {
      if (title.length > 50) {
        return `${title.slice(0, 45)}...`;
      }
      return title;
    };

    return (
      <ImageThumbnail
        key={ id }
        title={ prepLabelString() }
        src={ getSrcUrl() }
        id={ id }
        toggleCallback={ toggleImageCallback }
        isSelected={ isImageSelected(id) }
      />
    );
  };

  return (
    <div className={ `${classes.imageGallery} ${scrollbar.styledScrollbar}` }>
      {
        data.length
          ? data.map(image => prepImageThumbnail(image))
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
