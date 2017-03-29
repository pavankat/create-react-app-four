import React, { Component } from 'react';

const CatForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <input type="text"/>
  </form>)


CatForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  catName: React.PropTypes.string.isRequired
}

export default CatForm;
