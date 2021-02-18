import React, {useState} from 'react';
import './App.css';



function App() {

  return (
    <div className="App">
      <header className="App-header">
       <img onMouseOver={newImg} src={img} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
