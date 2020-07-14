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

    this.state = {
      currentSearch: '',
      images: [],
      loading: false,
      markers: [],
      memo: {}
    };
  }

  // Prevent page reload, clear input, set URL and push history on submit
  handleSubmit(searchInput, history, event) {
    if (event) {
      event.preventDefault();
      event.currentTarget.reset();
    }

    this.setState({
      loading: true
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
        currentSearch: query
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
            memo: newMemoState
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

  render() {
    const { images, loading } = this.state;
    console.log(this.state.memo);

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
        <main className="snapShotContainer">
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
          <GeoLocator
            items={images}
          />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
