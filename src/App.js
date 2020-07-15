import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {
  Header,
  Category,
  NotFound,
  Welcome,
  GeoLocator
} from './components';

import { getPhotoApiUrl } from './util/apiUtil';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchPhotos = this.fetchPhotos.bind(this);
    this.toggleMap = this.toggleMap.bind(this);
    this.toggleImage = this.toggleImage.bind(this);

    this.state = {
      currentSearch: '',
      images: [],
      loading: false,
      markers: [],
      isMapActive: true,
      selectedImages: []
    };
  }

  // Prevent page reload, clear input, set URL and push history on submit
  handleSubmit(searchInput, history, event) {
    if (event) {
      event.preventDefault();
    }

    this.setState({
      loading: true,
      currentSearch: searchInput
    }, () => {
      const url = `/${searchInput}`;
      history.push(url);
    });
  };

  fetchPhotos(query) {
    axios
      .get(getPhotoApiUrl(query))
      .then(response => {
        const photoData = response.data.photos.photo;
        this.setState({
          images: photoData,
          loading: false,
          currentSearch: query
        });
      })
      .catch(error => {
        console.error(
          'Encountered an error with fetching and parsing data',
          error
        );
      });
  };

  toggleMap() {
    const { isMapActive } = this.state;
    this.setState({
      isMapActive: !isMapActive
    });
  }

  toggleImage(image) {
    const { selectedImages } = this.state;
    const newSelectedImages = [...selectedImages];
    const inArrayPosition = newSelectedImages.findIndex((element) => element.id === image.id);
    if (inArrayPosition > -1) {
      newSelectedImages.splice(inArrayPosition, 1);
    } else {
      newSelectedImages.push(image);
    }

    this.setState({
      selectedImages: newSelectedImages
    });
  }

  render() {
    const { images, loading, isMapActive, selectedImages } = this.state;

    return (
      <BrowserRouter>
        <Route
          render={props => (
            <Header
              handleSubmit={this.handleSubmit}
              history={props.history}
            />
          )}
        />
        <main className={`snapShotContainer ${isMapActive ? 'active' : 'inactive'}`}>
          <Switch>
            <Route
              exact
              path='/'
              component={Welcome}
            />
            <Route
              path='/:searchInput'
              render={props => (
                <Category
                  searchTerm={props.match.params.searchInput}
                  images={images}
                  selectedImages={selectedImages}
                  loading={loading}
                  fetchCallback={this.fetchPhotos}
                  toggleImageCallback={this.toggleImage}
                />
              )}
            />
            <Route component={NotFound} />
          </Switch>
          <GeoLocator
            items={images}
            isOpen={isMapActive}
            toggleMap={this.toggleMap}
          />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
