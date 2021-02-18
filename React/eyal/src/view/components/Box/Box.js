import React, { useState } from 'react';
/* let random =0; */
function Box(props) {
  const { carType, speed, d } = props;
  const [random, setRandom] = useState(0);
  const [url, setUrl] = useState('');

  function changePic(){
    let random1 = Math.floor(Math.random() * 4)
    setRandom(random1)
    console.log(random1)
  }
  function handleSubmit(e){
    e.preventDefault();
    e.target.reset();
}

  return (
    <div onClick={changePic} style={{background:"pink"}}>
      <img  src={(e)=>()} className="App-logo" alt="logo"  />
      <form onSubmit={handleSubmit}>
      <input type="text" name="input" id="imgInput"/>
      <input type="button" value="OK"/>
      </form>
      
    </div>
  )

}



export default Box;