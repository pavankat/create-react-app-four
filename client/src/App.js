import React, { Component } from 'react';
import './App.css';
import SongForm from './components/SongForm';
import Song from './components/Song';
import {__loadSongs, __createSong, __destroySong, __updateSong} from './lib/songService';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs : [],
    }

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleRemove = this._handleRemove.bind(this);
    this._handleUpdate = this._handleUpdate.bind(this);
  }

  componentDidMount() {
    __loadSongs()
      .then(songs => this.setState({songs}))
  }

  componentDidUpdate(prevProps, prevState) {
    //clear the song form inputs if the component updates
    document.querySelector('#songForm').children[0].value = "";
    document.querySelector('#songForm').children[1].value = "";
  }

  _handleSubmit = (evt) => {
    evt.preventDefault();

    let newSong = {artist: evt.target.children[0].value, songName: evt.target.children[1].value};

    __createSong(newSong)
      .then((savedSong) => { //we do this because the savedSong will have an _id while newSong won't 
        let songs = [...this.state.songs, savedSong];
        this.setState({
          songs
        });
      })
  }

  _handleRemove = (evt) => {
    evt.preventDefault();

    let songId = evt.target.getAttribute('data-songid');

    __destroySong(songId)
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
    let updatedSong = {artist: evt.target.children[0].value, songName: evt.target.children[1].value};

    let songsInState = this.state.songs;

    __updateSong(updatedSong, songId).then((song) => {
      //this will return a new array of : [1, 2, 99, 4, 5]
        //[1,2,3,4,5].map((a) => (a == 3) ? 99 : a);
      let songs = songsInState.map((sng) => {
        return (sng._id == song._id) ? song : sng
      });

      this.setState({
        songs
      })
    });
  }

  render() {    
    return (
      <div className="App">
        <h1>The React Songs App (Uncontrolled Component without refs)</h1>

        <br /><br />

        <h2>Add a Song</h2>
        <SongForm 
          handleSubmit={this._handleSubmit} 
          edit={false}
           />
        <br /><br />

        {/* you need to pass songId because you don't have access to key as a prop in the Song component*/}
        <ul>
          {this.state.songs.map((song, ind) => <Song 
            key={song._id} 
            songId={song._id} 
            artist={song.artist} 
            songName={song.songName} 
            handleRemove={this._handleRemove} 
            handleUpdate={this._handleUpdate} />)}
        </ul>
        <br /><br />
      </div>
    );
  }
}
export default App;
