import React, {useState} from 'react';

function Box(props) {
  const [color, setColor] = useState('red');
  const [counter, setCounter] = useState(1);
  const [password, setPassword] = useState('123');
  const [pic , setPic] = useState('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.at%2Fpin%2F93590498490818566%2F&psig=AOvVaw38_ZLR6uWTTWg9adCRCaCu&ust=1613492616731000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDxvcim7O4CFQAAAAAdAAAAABAD')
  let x = 1;

  let picture = ['https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.coogfans.com%2Ft%2Frandom-picture-thread%2F13972&psig=AOvVaw38_ZLR6uWTTWg9adCRCaCu&ust=1613492616731000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDxvcim7O4CFQAAAAAdAAAAABAI',
'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Frandomimagesbr%2F&psig=AOvVaw38_ZLR6uWTTWg9adCRCaCu&ust=1613492616731000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDxvcim7O4CFQAAAAAdAAAAABAO',
'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.popville.com%2F2020%2F08%2Frandom-reader-rant-and-or-revel-684%2F&psig=AOvVaw38_ZLR6uWTTWg9adCRCaCu&ust=1613492616731000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDxvcim7O4CFQAAAAAdAAAAABAU']
  

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