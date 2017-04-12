import React, { Component } from 'react'

//this works:
const SongView = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
)

//this does not work:
	// class SongView extends Component {
	// 	render({match}) {
	// 		return (
	// 		  <div className="App">
	// 		  	{match.params.id}
	// 		  </div>
	// 		);
	// 	}
	// }

export default SongView;