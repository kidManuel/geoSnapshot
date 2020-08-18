import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import { Loader, Gallery } from '../';
import styles from './styles';

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
    const {
      loading,
      images,
      toggleImageCallback,
      selectedImages,
      classes
    } = this.props;

    return (
      <div className={classes.category}>
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

export default injectSheet(styles)(Category);

Category.propTypes = {
  searchTerm: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.object),
  selectedImages: PropTypes.arrayOf(PropTypes.string),
  loading: PropTypes.bool,
  fetchCallback: PropTypes.func,
  toggleImageCallback: PropTypes.func
};
