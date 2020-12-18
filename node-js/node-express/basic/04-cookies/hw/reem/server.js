const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');

app.use(bodyParser.json())
app.use(cookieParser());

const user =[];


app.post('/send-user',(req, res)=>{


    user.push(req.body.user);
    let json_str = JSON.stringify(user);
    // const {user} = req.body;
    let {IFollowYou} = req.cookies;
    const test = `${IFollowYou} =>  ${req.body.user}`;
    res.cookie('IFollowYou',json_str, { maxAge: 5000000, httpOnly: true });
    let json_perse = req.cookies.user;
    let arr = JSON.parse(json_perse);
    res.send({json_str})
})
// app.post('/buttonsClicked', (req, res) => {
    // let {IFollowYou} = req.cookies;
//  console.log(IFollowYou);
// const test = `${IFollowYou} =>  ${req.body.buttonInnertext}`;
    // res.cookie('IFollowYou',test, { maxAge: 5000000, httpOnly: true }); 
    // res.send({
    //     test
    // });
app.use(express.static('public'))

const port = process.env.PORT || 3000;
app.listen(port,()=>{console.log(`Listen on port ${port}`)});
