const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');

app.use(cookieParser());

let {username} = ""

app.post('/user', (req, res) => {
    console.log
}


app.use(express.static('public'))

const port = process.env.PORT || 3000;
app.listen(port,()=>{console.log(`Listen on port ${port}`)});