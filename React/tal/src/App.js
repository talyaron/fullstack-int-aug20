import logo from './logo.svg';
import './App.css';

//components
import Box from './view/components/Box/Box';

let x = 42;
let name = 'moshe'

function multi(a) {
  return a * 2
}

function App() {



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload {multi(x)} .
        </p>
        <p>fgdfgdfg</p>
        
        <Box info={{name, gender:'male'}} />
       
      </header>

    </div>

  );
}



export default App;
