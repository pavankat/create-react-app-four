import React, { Component } from 'react'
import {__loadSong, __loadSpotifyInformation} from '../lib/songService'
import SpotifyView from './SpotifyView'

//this is how to get to match with a pure component style:
	// const SongView = ({ match }) => (
	//   <div>
	//     <h3>ID: {match.params.id}</h3>
	//   </div>
	// )

class SongView extends Component {
	constructor() {
		super();
		this.state = {
			spotifyData : []
		}
	}

	componentDidMount() {
		__loadSong(this.props.match.params.id)
			.then(song => {
				__loadSpotifyInformation(song.artist, song.songName)
					.then(spotifyData => this.setState({spotifyData}))
			})
	}

	render() {
		return (
		  <div className="App">
		  	<p><strong>Song ID:</strong> {this.props.match.params.id}</p>

		  	<br />
		  	<br />

		  	{this.state.spotifyData.map((song, index) => <SpotifyView key={index} {...song} />)}
		  </div>
		);
	}
}

export default SongView;