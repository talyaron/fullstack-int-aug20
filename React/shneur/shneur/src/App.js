import React, {useState} from 'react';
import './App.css';



function App() {
  const [theImg, setTheImg] = useState("")

  const img = (e) =>{
    setTheImg(e.tatget.children.value)

  }

  return (
    <div className="App">
      <form onSubmit={img}>
        <input type="text" name="url"/>
      </form>
      <img src={img} />
    </div>
  );
}

export default App;
