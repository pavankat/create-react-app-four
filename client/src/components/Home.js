import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import SongView from './SongView'
import Nav from './Nav'
import App from '../App'

const Home = (props) => (
<Router>
	<div>
		<Nav />
		<Route exact path="/" component={App} />
		<Route path="/songs/:id" component={SongView} />
	</div>
</Router>
)

export default Home;