import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink exact to="/">Home</NavLink>
        </nav> 
      </div>
    );
  }
}

export default Nav;