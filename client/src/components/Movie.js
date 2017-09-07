import '../App.css';
import React, { Component } from 'react';

class Movie extends Component {
	constructor(){
		super();

		this.state = {
			movie : {}
		}
	}

	componentDidMount() {
		//update the movie in state here
		// fetch
		fetch(`/movies/${this.props.match.params.movie}`)
		  .then(res => res.json())
		  .then(movie => {
		  	this.setState({movie})
		  })
	}

  render() {
  	let moviePoster = '';
  	if (this.state.movie.Poster !== 'N/A') moviePoster = <img alt="{this.state.movie.Title}" src={this.state.movie.Poster} />;

    return (
      <div className="App">
	      {/* http://localhost:3000/movies/mr%20nobody */}
	      <h2>{this.state.movie.Title} Movie</h2>

	      <p><strong>Year:</strong> {this.state.movie.Year}</p>

	      <p><strong>imdbRating:</strong> {this.state.movie.imdbRating}</p>

	      <p><strong>Released:</strong> {this.state.movie.Released}</p>

	      <p><strong>Runtime:</strong> {this.state.movie.Runtime}</p>

	      <p><strong>Genre:</strong> {this.state.movie.Genre}</p>

	      <p><strong>Director:</strong> {this.state.movie.Director}</p>

	      <p><strong>Actors:</strong> {this.state.movie.Actors}</p>

	      <p><strong>Plot:</strong> {this.state.movie.Plot}</p>

	      <p><strong>Language:</strong> {this.state.movie.Language}</p>

	      <p><strong>Country:</strong> {this.state.movie.Country}</p>

	      {moviePoster}
      </div>
    );
  }
}

export default Movie;
