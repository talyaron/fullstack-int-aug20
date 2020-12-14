const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');

app.use(bodyParser.json())
app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: false }));

const user =[];


app.post('/send-user',(req, res)=>{


    user.push(req.body.user);
    let json_str = JSON.stringify(user);
    // const {user} = req.body;
    
    res.cookie('user',json_str, { maxAge: 5000000, httpOnly: true });
    let json_perse = req.cookies.user;
    let arr = JSON.parse(json_perse);
    res.send({ok:true,arr})
})

app.use(express.static('public'))

const port = process.env.PORT || 3000;
app.listen(port,()=>{console.log(`Listen on port ${port}`)});
