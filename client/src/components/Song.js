import React, { Component } from 'react';

class Song extends Component {
  render() {
    return (
      <li className="song">
        { /* this.props.key */ } {/* Warning: Cat: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. */}
        
          
          <span className='delete-item'><a href="#" data-songId={this.props.songId} onClick={this.props.handleRemove}>X</a></span>
          &nbsp;&nbsp;&nbsp;&nbsp;
        	<strong>Artist:</strong> {this.props.artist}
          &nbsp;&nbsp;
        	<strong>Song:</strong> {this.props.songName}
      </li>
    );
  }
}

Song.propTypes = {
  songId: React.PropTypes.string.isRequired,
	artist: React.PropTypes.string.isRequired,
	songName: React.PropTypes.string.isRequired,
}

export default Song;
