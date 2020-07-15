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

    this.state = {
      currentSearch: '',
      images: [],
      loading: false,
      markers: [],
      mapActive: true
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
    const { mapActive } = this.state;
    this.setState({
      mapActive: !mapActive
    });
  }

  render() {
    const { images, loading, mapActive } = this.state;

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
        <main className={`snapShotContainer ${mapActive ? 'active' : 'inactive'}`}>
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
                  loading={loading}
                  fetchCallback={this.fetchPhotos}
                />
              )}
            />
            <Route component={NotFound} />
          </Switch>
          <GeoLocator
            items={images}
            isOpen={mapActive}
            toggleMap={this.toggleMap}
          />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
