import {
  photoApiBaseUrl,
  flickrApiKey,
  perPageItems,
  desiredFormat,
  hasGeo,
  extras,
  otherParams
} from './const';

const getPhotoApiUrl = (query) => {
  return `${photoApiBaseUrl}&api_key=${flickrApiKey}&tags=${query}&has_geo=${hasGeo}&per_page=${perPageItems}&format=${desiredFormat}&extras=${extras}${otherParams}`;
};

export { getPhotoApiUrl };
