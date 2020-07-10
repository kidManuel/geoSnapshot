const apiBaseUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search';
const apiKey = '636e1481b4f3c446d26b8eb6ebfe7127';
const perPageItems = 24;
const desiredFormat = 'json';
const otherParams = '&nojsoncallback=1';

export {
  apiBaseUrl,
  apiKey,
  perPageItems,
  desiredFormat,
  otherParams
};
