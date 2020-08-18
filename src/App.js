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
require('dotenv').config();

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchPhotos = this.fetchPhotos.bind(this);
    this.toggleMap = this.toggleMap.bind(this);
    this.toggleImage = this.toggleImage.bind(this);
    this.pickAll = this.pickAll.bind(this);
    this.pickNone = this.pickNone.bind(this);

    this.state = {
      currentSearch: '',
      images: [],
      loading: false,
      markers: [],
      isMapActive: true,
      selectedImages: [],
      memo: {}
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
    const { memo } = this.state;
    const memoizedData = memo[query];

    if (memoizedData) {
      this.setState({
        images: memoizedData,
        loading: false,
        currentSearch: query,
        selectedImages: []
      });
    } else {
      axios
        .get(getPhotoApiUrl(query))
        .then(response => {
          const photoData = response.data.photos.photo;
          const newMemoEntry = { [query]: photoData };
          const newMemoState = Object.assign({ ...memo }, newMemoEntry);

          this.setState({
            images: photoData,
            loading: false,
            currentSearch: query,
            memo: newMemoState,
            selectedImages: []
          });
        })
        .catch(error => {
          console.error(
            'Encountered an error with fetching and parsing data',
            error
          );
        });
    }
  };

  toggleMap() {
    const { isMapActive } = this.state;
    this.setState({
      isMapActive: !isMapActive
    });
  }

  toggleImage(id) {
    const { selectedImages } = this.state;
    const newSelectedImages = [...selectedImages];
    const inArrayPosition = newSelectedImages.findIndex((element) => element.id === id);

    if (inArrayPosition > -1) {
      newSelectedImages.splice(inArrayPosition, 1);
    } else {
      newSelectedImages.push(id);
    }

    this.setState({
      selectedImages: newSelectedImages
    });
  }

  filterSelectedImagesById() {
    const { selectedImages, images } = this.state;
    const filteredImageData = images.filter(element => selectedImages.includes(element.id));
    return filteredImageData;
  }

  pickAll() {
    const { images } = this.state;
    const newSelectedImages = [...images];
    this.setState({
      selectedImages: newSelectedImages
    });
  }

  pickNone() {
    this.setState({
      selectedImages: []
    });
  }

  render() {
    const { images, loading, isMapActive, selectedImages, currentSearch } = this.state;
    console.log(images)
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
          <div className={`categoryInfo ${currentSearch.length ? 'active' : 'inactive'}`}>
            <h2 className='categoryTitle'>Showing pictures of: <span className='searchQueryInCategory'>{currentSearch}</span></h2>
            <div className="displayOptions">
              <h3
                className="massSelector"
                onClick={this.pickAll}
              >
                Pick All
              </h3>
              <h3
                className="massSelector"
                onClick={this.pickNone}
              >
                Clear Selection
              </h3>
            </div>
            <div className={`selectionTooltip ${selectedImages.length ? 'active' : 'inactive'}`}>See your selections in the map! → </div>
          </div>


          <Switch>
            <Route
              exact
              path='/SnapShot'
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
            items={this.filterSelectedImagesById()}
            isOpen={isMapActive}
            toggleMap={this.toggleMap}
          />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
