const express = require('express')
const moment = require('moment')
const app = exress();


app.use (express.static('public'));
const port = 3000;
app.listen(port, ()=>{console.log('server listen port', port)})