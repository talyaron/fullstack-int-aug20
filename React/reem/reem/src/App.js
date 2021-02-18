import logo from './logo.svg';
import './App.css';

//components
import Box from './component/box';
import Login from './component/login/login';
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
        <Login />
        <p>fgdfgdfg</p>
        {mockData.slice(0,2).map((person) => {
          return (<Box key={person.name} info={person} />)
        })

        }
      </header>

    </div>

  );
}



export default App;
