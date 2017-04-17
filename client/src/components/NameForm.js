import React from 'react';

const NameForm = (props) => (
  <form id="nameForm" onSubmit={props.handleSubmit}>
    <input type="text" 
    name="newName"
    placeholder="insert your name" 
     />

    <input type="submit" value="Get me songs with my name in it!" />
  </form>);


//https://facebook.github.io/react/docs/typechecking-with-proptypes.html
NameForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
}

export default NameForm;
