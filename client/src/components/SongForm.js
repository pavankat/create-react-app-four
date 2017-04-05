import React, { Component } from 'react';
// `data-songid="$(props.songId)"`
//{props.songId ? 'hi' : ""}
const SongForm = (props) => (
  <form onSubmit={props.handleSubmit} data-songid={props.songId}>
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

    {/* inline conditional rendering: */}
    <input type="submit" value={props.edit ? "Update" : "Save" } />
  </form>)

//https://facebook.github.io/react/docs/typechecking-with-proptypes.html
SongForm.propTypes = {
  handleInputChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  artist: React.PropTypes.string.isRequired,
  songName: React.PropTypes.string.isRequired,
  edit: React.PropTypes.bool.isRequired
}

export default SongForm;
