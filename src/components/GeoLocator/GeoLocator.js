import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ImageThumbnail } from '../';
import styles from './styles';

const GeoLocator = ({ google, items, toggleMap }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const setThumbnail = (item) => {
    setHoveredItem(item);
  };

  const prepMarker = item => {
    const { latitude, longitude, title, id } = item;
    return <Marker
      title={ title }
      position={ { lat: latitude, lng: longitude } }
      key={ id }
      onClick={ () => { setThumbnail(item); } }
    />;
  };

  const toggleExpand = () => {
    setHoveredItem(null);
    toggleMap();
  };

  const classes = styles();
  const { geoWrapper, toggleButton, iconToggle, geoLocator } = classes;

  return (
    <div className={ geoWrapper }>
      <div
        className={ toggleButton }
        onClick={ toggleExpand }
      >
        <svg height='25' width='19'>
          <path className={ iconToggle } d='M3.58,13.99l15.83,10.7c1.19,0.81,2.81-0.05,2.81-1.49V1.8c0-1.44-1.61-2.3-2.81-1.49L3.58,11.01
     C2.52,11.72,2.52,13.28,3.58,13.99z'/>
        </svg>
      </div>
      <Map
        google={ google }
        zoom={ 2 }
        initialCenter={ { lat: 48.701, lng: 16.087 } }
        className={ geoLocator }
      >
        {
          items.map((item) => prepMarker(item))
        }
      </Map>
      {
        hoveredItem
          ? <ImageThumbnail
            data={ hoveredItem }
            disableAnimation={ true }
          />
          : null
      }
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAP_API_KEY
})(GeoLocator);

GeoLocator.propTypes = {
  google: PropTypes.object,
  items: PropTypes.arrayOf(PropTypes.object),
  isOpen: PropTypes.bool,
  toggleMap: PropTypes.func
};
