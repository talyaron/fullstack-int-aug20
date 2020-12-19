const express = require('express')
const app = express(); 
const bodyParser = require('body-parser');
app.use(bodyParser.json())
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.post('/push' , (req,res)=>{
    let {count} = req.body.pushed

    if(!count){
        res.cookie('count',req.body.pushed, { maxAge: 5000000, httpOnly: false });
    }
})

app.use(express.static('public')) 

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`listen on port ${port}`) })