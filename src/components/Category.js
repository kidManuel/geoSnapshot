import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Loader, Gallery } from './';

class Category extends Component {
  componentDidMount() {
    // purposely not using an effect here.
    const { fetchCallback, searchTerm } = this.props;
    fetchCallback(searchTerm);
  }

  componentDidUpdate(prevProps) {
    const { fetchCallback, searchTerm } = this.props;
    const { searchTerm: prevSearchTerm } = prevProps;

    if (prevSearchTerm !== searchTerm) {
      fetchCallback(searchTerm);
    }
  };

  render() {
    const { searchTerm, loading, images, toggleImageCallback, selectedImages } = this.props;
    return (
      <div className='category'>
        <h2 className='categoryTitle'>Showing pictures of: <span className='searchQueryInCategory'>{searchTerm}</span></h2>
        {
          loading
            ? <Loader />
            : <Gallery
              data={images}
              selectedImages={selectedImages}
              toggleImageCallback={toggleImageCallback}
            />
        }
      </div>
    );
  };
};

export default Category;

Category.propTypes = {
  searchTerm: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.object),
  selectedImages: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  fetchCallback: PropTypes.func,
  toggleImageCallback: PropTypes.func
};
