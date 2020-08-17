const photoApiBaseUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search';
const perPageItems = 100;
const desiredFormat = 'json';
const otherParams = '&nojsoncallback=1';
const hasGeo = 1;
const extras = 'geo';

export {
  photoApiBaseUrl,
  perPageItems,
  desiredFormat,
  hasGeo,
  extras,
  otherParams
};
