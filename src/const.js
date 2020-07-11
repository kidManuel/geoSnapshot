const photoApiBaseUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search';
const geoApiBaseUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.geo.getLocation';
const apiKey = '636e1481b4f3c446d26b8eb6ebfe7127';
const perPageItems = 24;
const desiredFormat = 'json';
const otherParams = '&nojsoncallback=1';
const hasGeo = 1;
const extras = 'geo';

export {
  photoApiBaseUrl,
  geoApiBaseUrl,
  apiKey,
  perPageItems,
  desiredFormat,
  hasGeo,
  extras,
  otherParams
};
