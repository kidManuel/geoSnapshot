import {
  photoApiBaseUrl,
  perPageItems,
  desiredFormat,
  hasGeo,
  extras,
  otherParams
} from './const';

const flickrApiKey = process.env.REACT_APP_PHOTO_API_KEY

const getPhotoApiUrl = (query) => {
  return `${photoApiBaseUrl}&api_key=${flickrApiKey}&tags=${query}&has_geo=${hasGeo}&per_page=${perPageItems}&format=${desiredFormat}&extras=${extras}${otherParams}`;
};

export { getPhotoApiUrl };
