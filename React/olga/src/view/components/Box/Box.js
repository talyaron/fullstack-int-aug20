import React, {useState} from 'react';

function Box(props) {
  const imgData = ['https://helpx.adobe.com/content/dam/help/en/stock/how-to/adobe-stock-video-footage_297x176.jpg',
     'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search-v2_297x176.jpg', 
     'https://helpx.adobe.com/content/dam/help/en/stock/how-to/open-in-app-purchase_297x176.jpg'
  ]

  const [indImg, setIndex] = useState('0')
  const randomIndex =()=>{
    setIndex(Math.floor(Math.random() * Math.floor(imgData.length)))
  }
  console.log(indImg)
  return (<div onMouseOver={randomIndex}><img src={imgData[indImg]}/></div>)
 

  }

  export default Box;