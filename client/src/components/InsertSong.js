import React, { Component } from 'react';

const InsertSong = (props) => (
  <form onSubmit={props.handleSubmit}>
    <input type="text" 
    name="currentArtistName"
    onChange={props.handleInputChange}
    value={props.artist}
    placeholder="insert artist" 
     />

    <input type="text" 
    name="currentSongName"
    onChange={props.handleInputChange}
    value={props.songName}
    placeholder="insert song name" 
     />

     <input type="submit" />
  </form>)

InsertSong.propTypes = {
  handleInputChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  artist: React.PropTypes.string.isRequired,
  songName: React.PropTypes.string.isRequired,
}

export default InsertSong;
