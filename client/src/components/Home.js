import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import SongView from './SongView'
import Nav from './Nav'
import App from '../App'
import Name from './Name'
import Movie from './Movie'

const Home = (props) => (
<Router>
	<div>
		<Nav />
		<Route exact path="/" component={App} />
		<Route path="/names/:name" component={Name} />
		<Route path="/songs/:id" component={SongView} />
		<Route path="/movies/:movie" component={Movie} />
	</div>
</Router>
)

export default Home;