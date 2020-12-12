const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');

app.use(bodyParser.json())
app.use(cookieParser());

 const user = [];    

app.post('/send-user',(req, res)=>{

    // {user:['cherut', 'or']}
   
    user.push(req.body.user);
    console.log(user)
    
    res.cookie('user',user, { maxAge: 50000000, httpOnly: true });

    res.send({ok:true})
})

app.use(express.static('public'))

const port = process.env.PORT || 3000;
app.listen(port,()=>{console.log(`Listen on port ${port}`)});
