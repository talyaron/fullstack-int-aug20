const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');

app.use(bodyParser.json())
app.use(cookieParser());

const user =[];


app.post('/send-user',(req, res)=>{


    let { IFollowYou } = req.cookies;
    console.log(IFollowYou);

    let test = '';
    
    if (IFollowYou !== undefined) {
         test = `${IFollowYou} =>  ${req.body.buttonInnertext}`;
    } else {
        test = `>> ${req.body.buttonInnertext}`;
    }
    res.cookie('IFollowYou', test, { maxAge: 5000000, httpOnly: true });
    res.send({
        test
    });
    // console.log(req.body)
});
app.use(express.static('public'))

const port = process.env.PORT || 3000;
app.listen(port,()=>{console.log(`Listen on port ${port}`)});
