import React, { Component } from 'react';
import './App.css';
import SongForm from './components/SongForm';
import Song from './components/Song';
import {loadSongs, createSong, destroySong, updateSong} from './lib/songService';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs : [],
      currentArtistName : '',
      currentSongName : '',
      editSong : false
    }

    this._handleInputChange = this._handleInputChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleRemove = this._handleRemove.bind(this);
  }

  componentDidMount() {
    loadSongs()
      .then(songs => this.setState({songs}))
  }

  _handleEdit = (evt) => {
    evt.preventDefault();
    let songsInState = this.state.songs;
    let songId = evt.target.getAttribute('data-songid');
    let songName = evt.target.getAttribute('data-songname');
    let artistName = evt.target.getAttribute('data-artistname');
    let editSong = true;
    this.setState({editSong});
  }

  _handleSubmit = (evt) => {
    evt.preventDefault();

    let newSong = {songName: this.state.currentSongName, artist: this.state.currentArtistName};

    createSong(newSong)
      .then((savedSong) => { //we do this because the savedSong will have an _id while newSong won't 
        let currentArtistName = '';
        let currentSongName = '';
        let songs = [...this.state.songs, savedSong];
        this.setState({
          currentArtistName,
          currentSongName,
          songs
        });
      })
  }

  _handleInputChange = (evt) => {
    evt.preventDefault();
    const name = evt.target.name;
    this.setState({
      [name]: evt.target.value
    })
  }

  _handleRemove = (evt) => {
    evt.preventDefault();

    let songId = evt.target.getAttribute('data-songid');

    destroySong(songId)
      .then((oldSongId) => {
        
        let songs = this.state.songs.filter((song, i) => song._id !== oldSongId)

        this.setState({
          songs
        });
      })
  }

  _handleUpdate = (evt) => {
    evt.preventDefault();
    let songId = evt.target.getAttribute("data-songid")
    alert(songId);
    let updatedSong = {songName: evt.target.children[0].value, artist: evt.target.children[1].value};

    updateSong(updatedSong, songId).then((song) => {
      let songs = this.state.songs.map((sng) => {
        (sng._id == song._id) ? sng : song 
      });

      this.setState({
        songs
      })
    });
  }

  render() {    
    return (
      <div className="App">
        <h1>The React Songs App</h1>

        <br /><br />

        {/* you need to pass songId because you don't have access to key as a prop in the Song component*/}
        <ul>
          {this.state.songs.map((song, ind) => <Song 
            key={song._id} 
            songId={song._id} 
            artist={song.artist} 
            songName={song.songName} 
            handleRemove={this._handleRemove} 
            handleEdit={this._handleEdit}
            handleUpdate={this._handleUpdate} />)}
        </ul>
        <br /><br />

        <SongForm 
          songName={this.state.currentSongName}
          artist={this.state.currentArtistName}
          handleSubmit={this._handleSubmit} 
          handleInputChange={this._handleInputChange}
          edit={false}
           />
      </div>
    );
  }
}
export default App;
