import logo from './logo.svg';
import './App.css';

//components
import Box from './view/components/Box/Box';

let mockData = [
  { name: 'itzik', gender: 'male' },
  { name: 'Yona', gender: 'femal' },
  { name: 'Hadar', gender: 'Female' },
  { name: 'itYonizik', gender: 'male' }
]



function App() {



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

        </p>
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
