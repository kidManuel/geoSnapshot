import React from 'react';

import { ImageThumbnail } from '../'

//Small HOC to handle data prepping for thumbnails.
const FlickrImageThumbnail = ({ data, isToggled, extraClass, disableAnimation = false, toggleImageCallback }) => {
  const { farm, server, id, secret, title } = data;

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
      key={id}
      title={prepLabelString()}
      src={getSrcUrl()}
      id={id}
      toggleCallback={toggleImageCallback}
      isSelected={isToggled}
      disableAnimation={disableAnimation}
      extraClass={extraClass}
    />
  );
};

export default FlickrImageThumbnail;
