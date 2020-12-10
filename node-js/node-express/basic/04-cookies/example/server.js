const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use((req, res, next)=>{
    
    console.log(req.cookies)
    // {
    //     _hjid: '727017fc-5a48-4eba-85c0-58a4d8c57593',
    //     IFollowYou: 'This-is-my-spooky-cookie!!!!!'
    //   }

    let {IFollowYou} = req.cookies; // get cookie wuth name IFollowYou
    // const IFollowYou = req.cookies.IFollowYou;

    const currentDate = new Date().getTime()/1000;

    if(!IFollowYou){ //if IFollowYou do not exist, create it
        IFollowYou = JSON.stringify({currentDate})
        res.cookie('IFollowYou',IFollowYou, { maxAge: 5000000, httpOnly: true });
    }

    res.blabla = IFollowYou;

    next();
})

app.use((req, res, next)=>{
    console.log('bla bla: ',res.blabla);
    next();
})

app.get('/',(req, res)=>{
 
    res.send(`<h1>${res.blabla}</h1>`);
   
})

app.use(express.static('public'))

const port = process.env.PORT || 3000;
app.listen(port,()=>{console.log(`Listen on port ${port}`)});
