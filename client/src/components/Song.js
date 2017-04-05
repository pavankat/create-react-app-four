import React, { Component } from 'react';
import SongForm from './SongForm';

class Song extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit : false
    }

    this._handleEdit = this._handleEdit.bind(this);
  }

  _handleEdit(evt){
    this.setState({edit : !this.state.edit});
  }

  _handleInputChange = (evt) => {
    evt.preventDefault();
    const name = evt.target.name;
    this.setState({
      [name]: evt.target.value
    })
  }

  render() {
    let displayEditForm = null;
    if (this.state.edit) {
      displayEditForm = <SongForm 
          songName={this.props.songName}
          artist={this.props.artist}
          handleSubmit={this.props.handleUpdate}
          handleInputChange={this._handleInputChange}
          edit={true}
          songId={this.props.songId}
          cancelForm={this._handleEdit}
           />
    }

    return (
      <li className="song">
        { /* this.props.key */ } {/* Warning: Cat: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. */}
        
        {displayEditForm}

        <span className='delete-item'><a href='#' data-songId={this.props.songId} onClick={this.props.handleRemove}>X</a></span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <strong>Artist:</strong> {this.props.artist}
        &nbsp;&nbsp;
        <strong>Song:</strong> {this.props.songName}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className='edit-item'><a href='#' data-songId={this.props.songId} onClick={this._handleEdit}>{this.state.edit ? "Cancel" : "Edit"}</a></span>
          
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
