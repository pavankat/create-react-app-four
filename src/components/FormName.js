import React, { Component } from 'react';

class FormName extends Component {
  render() {
    return (
      <div className="container">
        <input type="text"
          onChange={this.props.handleInputChange}
          value={this.props.name}/>
      </div>
    );
  }
}

FormName.propTypes = {
	handleInputChange: React.PropTypes.func.isRequired,
	name: React.PropTypes.string.isRequired,
}

export default FormName;
