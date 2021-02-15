import React, { useState } from 'react';
const mockData=[{src:'https://www.w3schools.com/howto/img_snow_wide.jpg'},{src:'https://www.w3schools.com/howto/img_mountains_wide.jpg'}, {src:'https://www.w3schools.com/howto/img_lights_wide.jpg'}]

function Box(props) {
  const [url, setUrl] = useState(mockData[0].src)
  const [color, setColor] = useState('red');
  const [counter, setCounter] = useState(1);
  const [password, setPassword] = useState('123');

  let x = 1;

  function randomImg(){
    let r = Math.floor(Math.random()* mockData.length);
    setUrl(mockData[r].src)
  }

  function randomColor() {
    setColor("#" + ((1 << 24) * Math.random() | 0).toString(16))
    setCounter(counter + 1);
  }

  function xPlus() {
    x++;
    setColor("#" + ((1 << 24) * Math.random() | 0).toString(16));
    setPassword(Math.random().toString(36).slice(-8))
  }

  const { name, gender } = props.info;

  return (
    <div>
      <img src={url} alt='bla' onClick={randomImg}/>
      <h1 style={{ color: color }} onMouseOver={xPlus} onClick={randomColor}>
        Hello {name}, you are a {gender}: {counter}, x: {x}, and your password is {password}
      </h1>
    </div>
  )
}

export default Box;