import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React from 'react';
import PropTypes from 'prop-types';

import { googleMapsApiKey } from '../util/const';

const GeoLocator = ({ google, items, isOpen, toggleMap }) => {
  const prepMarker = item => {
    const { latitude, longitude, title, id } = item;
    return <Marker
      title={title}
      position={{ lat: latitude, lng: longitude }}
      key={id}
    />;
  };

  return (
    <div className='geoWrapper'>
      <div
        className='toggleButton'
        onClick={toggleMap}
      >
        <svg height='32' width='32'>
          <path className='iconToggle' d='M3.58,13.99l15.83,10.7c1.19,0.81,2.81-0.05,2.81-1.49V1.8c0-1.44-1.61-2.3-2.81-1.49L3.58,11.01
     C2.52,11.72,2.52,13.28,3.58,13.99z'/>
        </svg>
      </div>
      <Map
        google={google}
        zoom={4}
        // style={mapStyles}
        initialCenter={{ lat: 48.701, lng: 16.087 }}
        className='geoLocator'
      >
        {
          items.map((item) => prepMarker(item))
        }
      </Map>
    </div >
  );
};

export default GoogleApiWrapper({
  apiKey: googleMapsApiKey
})(GeoLocator);

GeoLocator.propTypes = {
  google: PropTypes.object,
  items: PropTypes.arrayOf(PropTypes.object),
  isOpen: PropTypes.bool,
  toggleMap: PropTypes.func
};
