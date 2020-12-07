const express = require('express')
const app = express();
var oneLinerJoke = require('one-liner-joke');

app.use(express.static('public'));  //use this middlware

var getRandomJoke;
let joke;

function getJoke() {
  getRandomJoke = oneLinerJoke.getRandomJoke();
  joke = getRandomJoke.body;
  
}

getJoke();
setInterval(getJoke, 2000);


 
app.get('/get-joke',(req, res)=>{
    res.send({joke})
})

const port = 3000;
app.listen(port, ()=>{console.log('server listen on port', port)})