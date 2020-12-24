const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(bodyParser.json()) //return req.body = body (from client)


app.post('/send-chosen', (req, res, next) => {

    console.log(req.body.chosenArr);
    let  IFollowYou  ="'"+JSON.stringify( req.body.chosenArr)+ "'";
    console.log(IFollowYou)
    // if(!IFollowYou){ //if IFollowYou do not exist, create it
        res.cookie('IFollowYou',IFollowYou, { maxAge: 500000, httpOnly: false }).send();
    // }
 
    next(); 
})

app.post('/reset', (req, res, next) => {
        res.cookie('IFollowYou',"", { maxAge: 1, httpOnly: false }).send();
    next(); 
})

app.use(express.static('public'))

const port = process.env.PORT || 8080;
app.listen(port,()=>{console.log(`Listen on port ${port}`)});
