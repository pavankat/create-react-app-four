import React, { Component } from 'react';
import './App.css';
import CatForm from './components/CatForm';
import Cat from './components/Cat';

class AppFour extends Component {
  state = {
    catName : "insert cat here",
    robsCats : ["Walter White", "Saul Goodman", "Gus Fring", "Jesse Pinkman", "Skyler White", "Hank Schrader", "Walter White Jr.", "Mike Ehrmantraut", "Tuco Salamanca", "Jane Margolis", "Marie Schrader", "Lydia Rodarte-Quayle"]
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    alert('hi')
    
    let robsCats = this.state.robsCats;
    robsCats.push(this.state.catName);
    let catName = null;

    this.setState({
      catName,
      robsCats
    });

    this.state.catName = '';
  }

  render() {
    return (
      <div className="App">
        <h1>This is AppFour.js</h1>
        
        <br /><br />

        {this.state.robsCats.map((cat, index) => <Cat key={index} catName={cat} />)}

        <br /><br />

        <CatForm 
          catName={this.state.catName}
          handleSubmit={this.handleSubmit} />
        
      </div>
    );
  }
}

export default AppFour;
