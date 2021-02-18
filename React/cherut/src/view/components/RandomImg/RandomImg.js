import React, {useState} from 'react';
import './RandomImg.scss';
// import img from './images/img1.png'

function RandomImg() {

  const images = [
    {index:0, url:'/images/img1.png'},
    {index:1, url:'/images/img2.png'},
    {index:2, url:'/images/img3.png'},
    {index:3, url:'/images/img4.png'}
  ]

  let randomImg = images[Math.floor(Math.random()* images.length)];
  const [url, setUrl] = useState(randomImg.url);
  const [index, setIndex] = useState(randomImg.index);
  // const [url, setUrl] = useState(randomImg());


  function switchUrl(){
    randomImg = images[Math.floor(Math.random()* images.length)];
    setUrl(randomImg.url)
    setIndex(randomImg.index)

    let solved = true;
    document.querySelector('.puzzle').childNodes.forEach((img,index)=>{
      if(img.id!=index){
        solved = false
      }
    })
    if(solved){
      alert('solvad');
    } 
  }



  return(
    <>
      <img id={index} src={url} alt='sorry:\, cannot find the img' onClick={switchUrl} />
    </>
  )
}

  export default RandomImg;