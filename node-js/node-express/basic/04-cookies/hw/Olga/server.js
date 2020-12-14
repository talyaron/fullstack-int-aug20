const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');

app.use(bodyParser.json())
app.use(cookieParser());

app.post('/send-namebutton',(req, res)=>{

    
    let IFollowYou  = req.cookies['nameBtn']

    if(!IFollowYou){
        IFollowYou = []
    }  
        
    IFollowYou.push(req.body.nameBtn)

    res.cookie('nameBtn',IFollowYou, { maxAge: 5000000, httpOnly: true });

    

    console.log(req.body)

    console.log(IFollowYou)

    res.send(IFollowYou)
})

/*app.post('/send-user',(req, res)=>{

    const {user} = req.body;
    
    res.cookie('user',user, { maxAge: 5000000, httpOnly: true });

    res.send({ok:true})
})*/

app.use(express.static('public'))

const port = process.env.PORT || 3000;
app.listen(port,()=>{console.log(`Listen on port ${port}`)});
