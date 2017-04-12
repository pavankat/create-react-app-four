import React, { Component } from 'react';
import SongForm from './SongForm';
import {
  Link
} from 'react-router-dom'

class Song extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit : false,
      currentSongName : "",
      currentArtistName : ""
    }

    //when you use arrow syntax for functions, es7 will autobind those functions to the component
      //so you don't need these lines here
    //--
    this._handleEdit = this._handleEdit.bind(this);
    //--
  }

  _handleEdit = (evt) => {
    evt.preventDefault();
    this.setState({edit : !this.state.edit});
  }
 
  render() {
    let urlToSongView = `/songs/${this.props.songId}`;
    let displayEditForm = null;
    if (this.state.edit) {
      displayEditForm = <SongForm 
          songName={this.state.currentSongName || this.props.songName}
          artist={this.state.currentArtistName || this.props.artist}
          handleSubmit={this.props.handleUpdate}
          edit={true}
          songId={this.props.songId}
          cancelForm={this._handleEdit}
           />
    }

    return (
      <li className="song">
        { /* this.props.key */ } {/* Warning: Cat: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. */}
        
        {displayEditForm}

        <Link exact to={urlToSongView}>SPOTIFY ME</Link>

        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className='delete-item'><a href='#' data-songid={this.props.songId} onClick={this.props.handleRemove}>X</a></span>
        &nbsp;&nbsp;&nbsp;&nbsp;
              
        <strong>Artist:</strong> {this.props.artist} {/* better to use artist from props because state in this component doesn't reflect the artist from the database in mongo */}
        &nbsp;&nbsp;
        <strong>Song:</strong> {this.props.songName} {/* better to use songName from props because state in this component doesn't reflect the songName from the database in mongo */}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className='edit-item'><a href='#' data-songid={this.props.songId} onClick={this._handleEdit}>{this.state.edit ? "Cancel" : "Edit"}</a></span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className='vote-item'><a href='#' data-songid={this.props.songId} data-direction="up" onClick={this.props.handleVote}>/\</a></span>
        &nbsp;&nbsp;
        {this.props.votes}
        &nbsp;&nbsp;
        <span className='vote-item'><a href='#' data-songid={this.props.songId} data-direction="down" onClick={this.props.handleVote}>\/</a></span>
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
