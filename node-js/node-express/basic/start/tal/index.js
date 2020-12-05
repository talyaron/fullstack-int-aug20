const express = require('express')
const app = express();

let numberOfDogs = 3;

//midleware

app.use((req,res, next)=>{
    console.log(`someone called the server: ${req.url} and I have ${numberOfDogs} dogs` );
   
    next();
   
})



app.use(express.static('public'));  //use this middlware



//the server response to the client
app.get('/get-number-of-dogs',(req, res)=>{
    res.send({numberOfDogs})
    numberOfDogs++
})

const port = 3000;
app.listen(port, ()=>{console.log('server listen on port', port)})