const express = require('express')
const app = express(); ///server;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.static('public'));
app.use(bodyParser.json())


app.post('/sendCity',(req, res)=>{

})



app.listen(3000, () => { console.log('listen 3000') })