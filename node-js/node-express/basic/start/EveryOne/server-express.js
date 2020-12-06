
const express = require('express')
const moment = require('moment')
const app = express();




app.use(express.static('public')); 

app.get('/get-time',(req, res)=>{
    let n =moment().format('MMMM Do YYYY, h:mm:ss a')
    res.send({n})
    
     
})
const port = 3000;
app.listen(port, ()=>{console.log('server listen on port', port)})