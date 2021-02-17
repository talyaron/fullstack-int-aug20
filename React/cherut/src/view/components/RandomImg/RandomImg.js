import React, {useState} from 'react';
import './RandomImg.scss';
// import img from './images/img1.png'

function RandomImg() {

  const images = ['/images/img1.png','/images/img2.png','/images/img3.png','/images/img4.png']

  const [url, setUrl] = useState( images[Math.floor(Math.random()* images.length)]);
  // const [url, setUrl] = useState(randomImg());
  
  function switchUrl(){
    let randomImg = images[Math.floor(Math.random()* images.length)];
    setUrl(randomImg)

    // let puzzle = document.querySelector('.puzzle');
    // console.log(puzzle.children[0].children[0].src.slice(32).slice(0,1))
  }



  return(
    <>
      <img src={url} alt='sorry:\, cannot find the img' onClick={switchUrl}></img>
    </>
  )
}

  export default RandomImg;