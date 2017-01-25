import React, { Component } from 'react';
import Navbar from './Navbar';
import MovieResult from './MovieResult';

class OMDBSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      results: []
    };
  }
  searchChange (e) {
    this.setState({searchTerm: e.target.value});
  }
  search (e) {
    console.log("searching");
    e.preventDefault();
    fetch(`http://omdbapi.com/?s=${this.state.searchTerm}`)
      .then(response => {
        response.json().then(data => {
          console.log(data.Search);
          this.setState({results: data.Search});
        });
      }).catch(error => {
        this.setState({results: null});
      });
  }
  render () {
    return (
      <div>
        <Navbar />
        <h1>Search for Movies</h1>
        <form onSubmit={(e) => this.search(e)}>
          <input type="text"
                 value={this.state.searchTerm}
                 onChange={(e) => this.searchChange(e)} />
          <input type="submit" />
        </form>
        {this.results()}
      </div>
    );
  }
  
  results() {
    return this.state.results.map(result =>
      <MovieResult title={result.Title}
                   year={result.Year}
                   poster={result.Poster}
                   imdbID={result.imdbID} />
    );
  }
}

module.exports = OMDBSearch;
