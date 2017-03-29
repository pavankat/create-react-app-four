import React, { Component } from 'react';
import './App.css';
import FormName from './components/FormName';

class AppThree extends Component {
  state = {
    name : "Meeses",
    nameChangeCount: 0
  }

  handleInputChange = (evt) => {
    evt.preventDefault()

    let count = this.state.nameChangeCount;

    count++;
    
    this.setState({
      nameChangeCount : count,
      name : evt.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>This is Appthree.js</h1>
        {this.state.name}

        <br /><br />

        {this.state.nameChangeCount}

        <br /><br />

        <FormName 
          name={this.state.name}
          handleInputChange={this.handleInputChange} />
        
      </div>
    );
  }
}

export default AppThree;
