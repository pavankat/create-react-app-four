import React, { Component } from 'react';

const CatForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <input type="text" 
    onChange={props.handleInputChange}
    value={props.catName} />
  </form>)


CatForm.propTypes = {
  handleInputChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  catName: React.PropTypes.string.isRequired
}

export default CatForm;
