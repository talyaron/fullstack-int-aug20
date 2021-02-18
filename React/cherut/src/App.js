import './App.scss';

//components
import Puzzle from './view/components/Puzzle/puzzle';
import Login from './view/components/Login/Login';


function App() {





  return (
    <div className="App">
        <h1>click on the images to solve the puzzle</h1>
        <Puzzle/>
        <Login/>
    </div>
     
  );
}

export default App;
