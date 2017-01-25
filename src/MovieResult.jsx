import React, { Component } from 'react';
const Link = require('react-router').Link;

class MovieResult extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: this.props.title,
      year: this.props.year,
      poster: this.props.poster,
      imdbID: this.props.imdbID
    }
  }

  render() {
    return (
      <div>
        <h2>
          <Link to={`/search/${this.state.imdbID}`}>
            ({this.state.year}) {this.state.title}
          </Link>
        </h2>
        <img src={this.state.poster} />
      </div>
    );
  }
}

export default MovieResult;
