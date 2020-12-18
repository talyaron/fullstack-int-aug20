const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(bodyParser.json()) //return req.body = body (from client)


app.post('/send-chosen', (req, res, next) => {

    console.log(req.body.chosen);
    let { IFollowYou } = req.body.chosen;
    
    if(!IFollowYou){ //if IFollowYou do not exist, create it
        res.cookie('IFollowYou',req.body.chosen, { maxAge: 500000, httpOnly: true });
    }
    next(); 
})

app.use(express.static('public'))

const port = process.env.PORT || 8080;
app.listen(port,()=>{console.log(`Listen on port ${port}`)});
