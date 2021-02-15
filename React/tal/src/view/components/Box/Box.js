import React, {useState} from 'react';

function Box(props) {
  const [color, setColor] = useState('red');
  const [counter, setCounter] = useState(1);
  const [password, setPassword] = useState('123');

  let x = 1;
  
  function randomColor(){
    setColor("#" + ((1<<24)*Math.random() | 0).toString(16))
    setCounter(counter+1);
  }

  function xPlus(){
    x++;
    setColor("#" + ((1<<24)*Math.random() | 0).toString(16));
    setPassword(Math.random().toString(36).slice(-8))
  }

    const { name, gender } = props.info;
  
    return (<h1 style={{color:color}} onMouseOver={xPlus} onClick={randomColor}>Hello {name}, you are a {gender}: {counter}, x: {x}, and your password is {password}</h1>)
  }

  export default Box;