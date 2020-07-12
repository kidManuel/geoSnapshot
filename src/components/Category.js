import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';
import Gallery from './Gallery';

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
    const { searchTerm, loading, images } = this.props;
    return (
      <div>
        <h2>{searchTerm} Pictures</h2>
        {
          loading
            ? <Loader />
            : <Gallery data={images} />
        }
      </div>
    );
  };
};

export default Category;

Category.propTypes = {
  searchTerm: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  fetchCallback: PropTypes.func
};
