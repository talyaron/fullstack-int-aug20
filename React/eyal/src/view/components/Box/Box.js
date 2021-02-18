import React, { useState } from 'react';
/* let random =0; */
function Box(props) {
  const { carType, speed, d } = props;
  const [random, setRandom] = useState(0);
  
  function changePic(){
    let random1 = Math.floor(Math.random() * 4)
    setRandom(random1)
    console.log(random1)
  }

  return (
    <div onClick={changePic} style={{background:"pink"}}>
      <img  src={d[random].src} className="App-logo" alt="logo"  />
      <h1 >this is {carType} and her max speed is {speed} mph</h1>
    </div>
  )

}



export default Box;