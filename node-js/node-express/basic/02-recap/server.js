const express = require('express')
const app = express(); ///server


app.use(express.static('public')) //all static files, that client get , html, js , img , css

//send random number to client

app.get('/get-random-number',(req, res)=>{   //req = request from client; res = response to client
    
   
    res.send({number:Math.floor(Math.random()*1000)})
})


const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`listen on port ${port}`)}) //listen to clients requests

