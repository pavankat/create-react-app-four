import React, { Component } from 'react';
import './App.css';
import InsertSong from './components/InsertSong';
import Song from './components/Song';
import {loadSongs, createSong, destroySong} from './lib/songService';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs : [],
      currentArtistName : '',
      currentSongName : '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount() {
    loadSongs()
      .then(songs => this.setState({songs}))
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    let songs = this.state.songs;
    let newSong = {songName: this.state.currentSongName, artist: this.state.currentArtistName};

    createSong(newSong)
      .then((ns) => {
        let currentArtistName = '';
        let currentSongName = '';
        songs = [...songs, ns];
        this.setState({
          currentArtistName,
          currentSongName,
          songs
        });
      })
  }

  handleInputChange = (evt) => {
    evt.preventDefault();
    const name = evt.target.name;
    this.setState({
      [name]: evt.target.value
    })
  }

  handleRemove = (evt) => {
    evt.preventDefault();

    let songs = this.state.songs;
    let songId = evt.target.getAttribute('data-songid');

    destroySong(songId)
      .then((ns) => { //ns is song id
        
        songs = songs.filter((_, i) => _._id !== ns)

        this.setState({
          songs
        });
      })
  }

  render() {
    return (
      <div className="App">
        <h1>The React Songs App</h1>
        
        <br /><br />

        {/* you need to pass songId because you don't have access to key as a prop in the Song component*/}
        <ul>
          {this.state.songs.map((song) => <Song key={song._id} songId={song._id} artist={song.artist} songName={song.songName} handleRemove={this.handleRemove} />)}
        </ul>
        <br /><br />

        <InsertSong 
          songName={this.state.currentSongName}
          artist={this.state.currentArtistName}
          handleSubmit={this.handleSubmit} 
          handleInputChange={this.handleInputChange} />
      </div>
    );
  }
}
export default App;
