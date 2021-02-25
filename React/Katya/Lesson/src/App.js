import React, { useState } from 'react'
import './App.css';

import Box from './view/components/Box/Box'
import Img from './view/components/Box/Img'
import Login from "./view/login/Login";


/////====2:18:00====//
let x = 32;
let name = 'Katya'


let mockData = [
  { name: 'Koko', gender: 'male' },
  { name: 'Key', gender: 'female' },
  { name: 'Map', gender: 'female' },
  { name: 'Shanel', gender: 'male' }
]


const imgs = [
  'https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340',
  'https://www.pressgazette.co.uk/wp-content/uploads/2020/11/shutterstock.jpg',
  'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGljdHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
  'https://expertphotography.com/wp-content/uploads/2011/06/how-to-take-good-pictures-image2.jpg'
]

function App() {

  const [showLogin, setShowLogin] = useState(false)

  function multi(a) {
    return a * 2
  }

  function handleShowLogin() {
    setShowLogin(!showLogin)
  }

  return (
    <div className="App"> {/* Can use only one parent */}
      <header className="App-header">

        <p>
          32&times;2={multi(x)}.
        </p>
        <button onClick={handleShowLogin} className='buttonShowLogin'>Show Login</button>
        <Login showLogin={showLogin} />

        <p>With map we can get all pics one by one in array</p>

        <div style={{ display: 'flex', flexDirection: 'row', marginLeft:'10%' }}>
          {imgs.map((img, index) => {
            return (<Img />)
          })}
        </div>

        <p>With slice we can show only those element that we want</p>

        <div style={{display: 'flex', flexDirection: 'row'}}>
        {mockData.slice(0, 2).map((person, index) => { /* slice(0,2) - give us two first persons */
          return (<Box key={index} info={person} />)
        })}
</div>

        <p>Have a nice day!</p>
        {/* <Box info={{ name, gender: 'female' }} /> */}
        {/* במקום לרשום מספר פעמים את התמונות, ניתן להוציא כל אחת מהן בעזרת פונקצית מיפוי */}
        {/* <Img />
        <Img />
        <Img />
        <Img />
        <Img /> */}


      </header>
    </div>
  );
}



export default App;
