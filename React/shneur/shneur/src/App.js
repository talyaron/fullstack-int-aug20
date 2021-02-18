import React, {useState} from 'react';
import './App.css';



function App() {
  const [img, setImg] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDwgHfsLLZL-TxVOuyeJByVYKRLeLvMisTGJju8g_EdWr1Kgj2AO5sRN_BwQ&s");
  const [counter, setCounter] = useState(1);
  const images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDwgHfsLLZL-TxVOuyeJByVYKRLeLvMisTGJju8g_EdWr1Kgj2AO5sRN_BwQ&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX8-yIs_faHAWr6lZ6kZTuV3Jnolx2w44MhWy9BwoZCYiBwQ_giknmJ9THjEM&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YFW1hdIoTO2SR_qKD3050ckubzeKROy3SeFBUjHgzB466TdQx-kPtppmk3E&s"
]

function changeImg(){
  let newImg = images[0] 
    counter++  
    return newImg
}

function theCounter(){
  setCounter(counter+1);
  return counter
}


  return (
    <div className="App">
      <header className="App-header">
       <img onMouseOver={newImg} src={img} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
