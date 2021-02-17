// import logo from './logo.svg';
import './App.scss';

//components
// import RamdomImg from './view/components/RandomImg/RandomImg';
import Puzzle from './view/components/Puzzle/puzzle';

// let mockData = [
//   { name: 'itzik', gender: 'male' },
//   { name: 'Yona', gender: 'femal' },
//   { name: 'Hadar', gender: 'Female' },
//   { name: 'itYonizik', gender: 'male' }
// ]


function App() {
  return (
    <div className="App">
        <Puzzle/>
    </div>
  );
}

export default App;
