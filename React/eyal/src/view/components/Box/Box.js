import React from 'react';
let rendom =0;
function Box(props) {
    const { carType, speed ,d} = props;
  
    return (
    <div>
    <img src={d[rendom].src} className="App-logo" alt="logo" onclick={changepic} />
    <h1 >this is {carType} and her max speed is {speed} mph</h1>
    </div>
    )
  }


  let changepic = ()=>{
    rendom = Math.random() * 4
    console.log(rendom)
  } 
  export default Box;