import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';
import PropTypes from 'prop-types';

import { googleMapsApiKey } from '../const';

const GeoLocator = ({ message, google }) => {
  console.log(message);
  console.log(google);

  return (
    <Map
      google={google}
      zoom={4}
      // style={mapStyles}
      initialCenter={{ lat: 47.444, lng: -122.176 }}
    >
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: googleMapsApiKey
})(GeoLocator);

GeoLocator.propTypes = {
  google: PropTypes.object,
  message: PropTypes.string
};
