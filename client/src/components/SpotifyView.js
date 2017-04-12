import React, { Component } from 'react'
import './SpotifyView.css';

class SpotifyView extends Component {
	render() {
		return (
		  <div className="SpotifyView">
		  	<p><strong>Artist:</strong> {this.props.artist}</p>
		  	<p><strong>Song:</strong> {this.props.songName}</p>
		  	<p><strong>Album:</strong> {this.props.album}</p>
		  	
		  	<audio controls>
		  		<source src={this.props.previewSong} type="audio/mpeg" />
		  		Your browser does not support the audio element.
		  	</audio>
		  </div>
		);
	}
}

export default SpotifyView;