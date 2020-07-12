import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Category from './components/Category';
import NotFound from './components/NotFound';
import Welcome from './components/Welcome';
// import GeoLocator from './components/GeoLocator';

import { getPhotoApiUrl } from './util/apiUtil';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchPhotos = this.fetchPhotos.bind(this);

    this.state = {
      currentSearch: '',
      images: [],
      loading: false,
      markers: []
    };
  }

  // Prevent page reload, clear input, set URL and push history on submit
  handleSubmit(e, history, searchInput) {
    e.preventDefault();
    e.currentTarget.reset();
    this.setState({
      loading: true
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

  render() {
    const { images, loading } = this.state;

    return (
      <main className="snapShotContainer">
        <BrowserRouter>
          <Route
            render={props => (
              <Header
                handleSubmit={this.handleSubmit}
                history={props.history}
              />
            )}
          />
          <Switch>
            <Route
              exact
              path="/"
              component={Welcome}
            />
            <Route
              path="/:searchInput"
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
        </BrowserRouter>
        {
          // <GeoLocator />
        }
      </main>
    );
  }
}

export default App;
