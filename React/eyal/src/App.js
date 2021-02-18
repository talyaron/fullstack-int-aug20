
import './App.css';

//components
import Box from './view/components/Box/Box';
 import dataArray from './data/data';


let d = dataArray;
let carType = 'mazda';
let speed = '120';

function App() {

  return (
    <div className="App">
      <header className="App-header">
       
       {d.map((img,i) =>{
         return (<Box carType={carType} speed={speed} d={d} key={i}/>)
       })

       }
        
       
      </header>

    </div>

  );
}



export default App;
