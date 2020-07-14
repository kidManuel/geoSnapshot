const photoApiBaseUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search';
const flickrApiKey = '636e1481b4f3c446d26b8eb6ebfe7127';
const googleMapsApiKey = 'AIzaSyDmYGxBHZfm1i3kGKqNgT5zXTW2gMBOw88';
const perPageItems = 100;
const desiredFormat = 'json';
const otherParams = '&nojsoncallback=1';
const hasGeo = 1;
const extras = 'geo';

export {
  photoApiBaseUrl,
  flickrApiKey,
  googleMapsApiKey,
  perPageItems,
  desiredFormat,
  hasGeo,
  extras,
  otherParams
};
