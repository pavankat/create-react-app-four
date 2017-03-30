import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name : "Meeses"
  }

  handleInputChange = (evt) => {
    evt.preventDefault()

    this.setState({
      name : evt.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>This is App.js</h1>
        {this.state.name}
        <br /><br />
        {this.state.name.split("").reverse().join("")}

        {/* need trailing slash in br tag or things will break */}
        <br /><br /> 

        <input type="text"
          onChange={this.handleInputChange}
          value={this.state.name}/>
      </div>
    );
  }
}

export default App;