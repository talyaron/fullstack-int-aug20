const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use((req, res, next)=>{
    
    console.log(req.cookies)
    

    let {IFollowYou} = req.cookies; // get cookie wuth name IFollowYou
    // const IFollowYou = req.cookies.IFollowYou;

    const currentDate = new Date().getTime()/1000;

    if(!IFollowYou){ //if IFollowYou do not exist, create it
        IFollowYou = JSON.stringify({currentDate})
        res.cookie('IFollowYou',IFollowYou, { maxAge: 5000000, httpOnly: false });
    }

    res.blabla = IFollowYou;

    next();
})

app.use(express.static('public'))

const port = process.env.PORT || 3000;
app.listen(port,()=>{console.log(`Listen on port ${port}`)});
