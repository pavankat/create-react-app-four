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
    return (
      <div>
	      {/* http://localhost:3000/movies/mr%20nobody */}
	      <h2>{this.state.movie.Title} Songs</h2>

	      {this.state.movie.Year}
      </div>
    );
  }
}

export default Movie;