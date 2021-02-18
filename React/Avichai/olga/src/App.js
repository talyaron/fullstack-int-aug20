import logo from './logo.svg';
import './App.css';

//components
import Box from './view/components/Box/Box';

const imgData2 = [{src:'https://helpx.adobe.com/content/dam/help/en/stock/how-to/adobe-stock-video-footage_297x176.jpg'},
     {src:'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search-v2_297x176.jpg'}, 
     {src:'https://helpx.adobe.com/content/dam/help/en/stock/how-to/open-in-app-purchase_297x176.jpg'}
  ]





function App() {



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        
        
        {imgData2.map((img, index) => {
          return (<Box info={img} />)
        })
      }
      </header>

    </div>

  );
}



export default App;
