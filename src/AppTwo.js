import React, { Component } from 'react';
import './App.css';
import FormName from './components/FormName';

class AppTwo extends Component {
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
        <h1>This is AppTwo.js</h1>
        {this.state.name}

        <br /><br />

        <FormName 
          name={this.state.name}
          handleInputChange={this.handleInputChange} />
        
      </div>
    );
  }
}

export default AppTwo;
