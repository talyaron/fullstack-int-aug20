const express = require('express')
const app = express(); ///server;
const bodyParser = require('body-parser');





app.use(bodyParser.json()) 


app.use(express.static('public'))

app.post("/go", (req, res)=>{
    res.redirect(307, 'test.html')
})



app.listen(3000, ()=>{console.log('listen 3000')})