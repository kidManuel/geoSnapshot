const photoApiBaseUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search';
const perPageItems = 100;
const desiredFormat = 'json';
const otherParams = '&nojsoncallback=1';
const hasGeo = 1;
const extras = 'geo';
const suggestionsList = [
  'Mountain',
  'Lake',
  'Forest',
  'People',
  'Food',
  'Monument',
  'Art',
  'Museum',
  'Graffitti',
  'Music',
  'Dance',
  'Concert',
  'Games',
  'Night',
  'Portrait',
  'Beach',
  'Casino',
  'Park',
  'Animal',
  'Cat',
  'Dog',
  'Cemetery',
  'Historic',
  'Attraction',
  'Sight',
  'Woods',
  'Store',
  'Shopping',
  'Restaurant',
  'University',
  'Hike',
  'Zoo',
  'Castle'
];

export {
  photoApiBaseUrl,
  perPageItems,
  desiredFormat,
  hasGeo,
  extras,
  otherParams,
  suggestionsList
};
