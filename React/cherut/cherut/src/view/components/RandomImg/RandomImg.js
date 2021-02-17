import React, {useState} from 'react';

function RandomImg() {

 

  const [url, setUrl] = useState('aa');
  
  // function randomImg(){
  //   setUrl()
  // }

  

  return(
    <div>
      <img src={url} alt="good" />
    </div>
  )
}

  export default RandomImg;