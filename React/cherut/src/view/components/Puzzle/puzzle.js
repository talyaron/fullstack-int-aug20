// import React, {useState} from 'react';
import './puzzle.scss';

//components
import RamdomImg from '../RandomImg/RandomImg';

function Puzzle() {

  const images = [
  '/images/img2.png',
  '/images/img3.png',
  '/images/img4.png',
  '/images/img1.png'
  ]


  

  return(

   <div className='puzzle'>

    {images.map((img,index) => {
            return (<RamdomImg key={index}/>)
          })
        
    }

   </div>
  
  )
}

  export default Puzzle;