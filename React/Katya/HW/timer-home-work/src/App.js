import React from 'react'
import './App.css';

import Title from './view/Header/Title'
import Body from './view/Body/Body'
import Login from './view/Login/Login'

function App() {
  return (
    <div>
      <Login />
      <Title />
      <Body />
    </div>
  );
}

export default App;
