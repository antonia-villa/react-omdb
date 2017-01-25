import React, { Component } from 'react';
import Navbar from './Navbar'

class MovieDetailPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      movie: null
    }
    
    fetch(`http://omdbapi.com/?i=${this.props.params.imdbID}`)
    .then(response => {
      console.log("got response:", response);
      response.json().then(data => {
        this.setState({movie: data});
      });
    }).catch(error => {
      console.log("error");
      this.setState({movie: null});
    });
  }

  render() {
    const movie = this.state.movie;
    if (!movie) {
      return <div>
        <Navbar />
        <h2>Loading...</h2>
      </div>
    }
    
    return (
      <div>
        <Navbar />
        <h2>({movie.Year}) {movie.Title}</h2>
        <img src={movie.Poster} />
        <p>
          {movie.Plot}
        </p>
      </div>
    );
  }
}

export default MovieDetailPage;
