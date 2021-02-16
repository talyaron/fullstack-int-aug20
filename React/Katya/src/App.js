import logo from './logo.svg';
import './App.css';

import Box from './view/components/Box/Box'
import Img from './view/components/Box/Img'

let x = 32;
let name = 'Katya'

function App() {

  function multi(a) {
    return a * 2
  }

  return (
    <div className="App"> {/* Can use only one parent */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload {multi(x)}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org "
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Have a nice day!</p>
        <Box info={{ name, gender: 'female' }} />
        <Img />

 
      </header>
    </div>
  );
}



export default App;
