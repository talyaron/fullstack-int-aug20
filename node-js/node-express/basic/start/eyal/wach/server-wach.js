const express = require('express')
const app = express();

const time;

app.use((req,res, next)=>{
    console.log(`the time is: ${time}` );
   
    next();
   
})


app.use(express.static('public'));


app.get('/get-number-of-dogs',(req, res)=>{
    res.send({numberOfDogs})
    numberOfDogs++
})


const port = 8080;

app.listen(port, () => {console.log('listening on port 8080',port)})