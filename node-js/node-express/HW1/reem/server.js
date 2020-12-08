const express = require('express')
const app = express();

var oneLinerJoke = require('one-liner-joke');
var getRandomJoke  ;
let joke;

// console.log(getRandomJoke.body)

app.use(express.static('public'));  //use this middlware
setInterval(() => {

     getRandomJoke = oneLinerJoke.getRandomJoke();
     joke = getRandomJoke.body
    
}, 10000)







//the server response to the client
app.get('/get-joke',(req, res)=>{
    res.send({joke})
    
})

const port = 3000;
app.listen(port, ()=>{console.log('server listen on port', port)})