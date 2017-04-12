import React from 'react';

const SongForm = (props) => (
  <form id="songForm" onSubmit={props.handleSubmit} data-songid={props.songId}>
    <input type="text" 
    name="currentArtistName"
    defaultValue={props.artist}
    placeholder="insert artist" 
     />

    <input type="text" 
    name="currentSongName"
    defaultValue={props.songName}
    placeholder="insert song name" 
     />

    {/* inline conditional rendering: */}
    <input type="submit" value={props.edit ? "Update" : "Save" } />
  </form>);


//https://facebook.github.io/react/docs/typechecking-with-proptypes.html
SongForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  edit: React.PropTypes.bool.isRequired,
}

export default SongForm;
