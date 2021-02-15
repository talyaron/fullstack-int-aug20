import React from 'react';

function Box(props) {
    const { name, gender } = props;
  
    return (<h1>Hello {name}, you are a {gender}</h1>)
  }

  export default Box;