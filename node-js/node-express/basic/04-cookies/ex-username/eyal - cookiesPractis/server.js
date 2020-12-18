const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const cookiesPractice = require('cookie-parser');
const bodyParser = require('body-Parser');

app.use(bodyParser.json());
app.use(cookiesPractice());

app.post('/send_user_information', (req, res) => {
    const {myUserIDs} =req.cookies;


    res.cookie('myUserIDs',req.body.UserID,{maxAge:300000});
    res.send({
        OK: true
    })
    console.log(req.body.UserID)
})



app.use(express.static('public'));
app.listen(port, () => { console.log(`listen on port ${port}`) }) 



