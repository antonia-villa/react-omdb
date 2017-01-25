import React, { Component } from 'react';
import styles from './styles/app.css';

const Router = require('react-router').Router;
const Route = require('react-router').Route;
const browserHistory = require('react-router').browserHistory;

import Navbar from './Navbar';
import TodoListContainer from './TodoListContainer';
import About from './About';
import Contact from './Contact';
import OMDBSearch from './OMDBSearch';
import MovieDetailPage from './MovieDetailPage';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router history={browserHistory}>
          <Navbar />
          <Route path="/" component={TodoListContainer} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/search" component={OMDBSearch} />
          <Route path="/search/:imdbID" component={MovieDetailPage} />
        </Router>
      </div>
    );
  }
}

export default App;
