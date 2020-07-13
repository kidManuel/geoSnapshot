import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React from 'react';
import PropTypes from 'prop-types';

import { googleMapsApiKey } from '../util/const';

const GeoLocator = ({ google, items }) => {
  const prepMarker = item => {
    const { latitude, longitude, title, id } = item;
    return <Marker
      title={title}
      position={{ lat: latitude, lng: longitude }}
      key={id}
    />;
  };

  return (
    <Map
      google={google}
      zoom={4}
      // style={mapStyles}
      initialCenter={{ lat: 47.444, lng: -122.176 }}
      className="geoLocator"
    >
      {
        items.map((item) => prepMarker(item))
      }
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: googleMapsApiKey
})(GeoLocator);

GeoLocator.propTypes = {
  google: PropTypes.object,
  items: PropTypes.arrayOf(PropTypes.object)
};
