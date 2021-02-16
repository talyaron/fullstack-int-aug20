import logo from './logo.svg';
import './App.css';

import Box from './view/components/Box/Box'
import Img from './view/components/Box/Img'

let x = 32;
let name = 'Katya'


let mockData = [
  { name: 'Koko', gender: 'male' },
  { name: 'Key', gender: 'female' },
  { name: 'Map', gender: 'female' },
  { name: 'Shanel', gender: 'male' }
]


function App() {

  function multi(a) {
    return a * 2
  }

  return (
    <div className="App"> {/* Can use only one parent */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bla bla bla {multi(x)}.
        </p>

        {mockData.slice(0,2).map((person, index) => { /* slice(0,2) - give us two first persons */
          return (<Box key={index} info={person} />)
        })}

        <a
          className="App-link"
          href="https://reactjs.org "
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Have a nice day!</p>
        {/* <Box info={{ name, gender: 'female' }} /> */}
        <Img />


      </header>
    </div>
  );
}



export default App;
