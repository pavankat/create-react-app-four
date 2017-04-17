import '../App.css';
import React, { Component } from 'react';
import NameForm from './NameForm'
import SpotifyView from './SpotifyView'
import {__loadSpotifyInformation} from '../lib/songService'

class Name extends Component {
	constructor() {
		super();
		this.state = {
			name : "",
			spotifyData : []
		}

		//when you use arrow syntax for functions, es7 will autobind those functions to the component
		  //so you don't need these lines here
		//--
		this._handleSubmit = this._handleSubmit.bind(this);
		//--
	}

	componentDidMount() {
		this.setState({name : this.props.match.params.name}, () => {
			__loadSpotifyInformation(this.state.name, this.state.name)
				.then(spotifyData => this.setState({spotifyData}))
		});
	}

	_handleSubmit = (evt) => {
		evt.preventDefault();

		this.setState({name : evt.target.children[0].value.toLowerCase()}, () => {
			__loadSpotifyInformation(this.state.name, this.state.name)
				.then(spotifyData => {
					this.setState({spotifyData : []}); //if I don't empty it, the songs cosmetically change but the old songs are still used
					this.setState({spotifyData});
				})
		})
	}


	render() {
		let header = "loading...";

		if (this.state.name != ""){
			header = <h2>Songs with {this.state.name} in it</h2>
		}

		return (
		  <div className="App">
		  	{header}

		  	<hr />
		  	<h3>Put your name in here to see songs with your name in it!</h3>

		  	<NameForm handleSubmit={this._handleSubmit} />

		  	<hr />

		  	{this.state.spotifyData.map((song, index) => <SpotifyView key={index} {...song} />)}
		  </div>
		);
	}
}

export default Name;