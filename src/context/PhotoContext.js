import React, { createContext, useState } from 'react';
import axios from 'axios';
import {
  photoApiBaseUrl,
  flickrApiKey,
  perPageItems,
  desiredFormat,
  hasGeo,
  extras,
  otherParams
} from '../const';

export const PhotoContext = createContext();

const PhotoContextProvider = props => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPhotoApiUrl = (query) => {
    return `${photoApiBaseUrl}&api_key=${flickrApiKey}&tags=${query}&has_geo=${hasGeo}&per_page=${perPageItems}&format=${desiredFormat}&extras=${extras}${otherParams}`;
  };

  const fetchPhotos = query => {
    axios
      .get(getPhotoApiUrl(query))
      .then(response => {
        const photoData = response.data.photos.photo;
        setImages(photoData);
        setLoading(false);
      })
      .catch(error => {
        console.log(
          'Encountered an error with fetching and parsing data',
          error
        );
      });
  };

  return (
    <PhotoContext.Provider value={{ images, loading, fetchPhotos }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
