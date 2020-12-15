const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const cookiesPractice = require('cookie-parser');
const bodyParser = require('body-Parser');
const UserDitles = { UserID: "eyal", Pass: "123" }

app.use(bodyParser.json());
app.use(cookiesPractice());

app.post('/U_info', (req, res,next) => {
    const {myUserIDs} =req.cookies;
    console.log('sending to the claient: ' + req.body);
    uditails = {id:req.body.UserID,pass:req.body.mypass}
    if ((req.body.UserID == UserDitles.UserID) && (req.body.mypass == UserDitles.Pass)) {

        res.cookie('myUserIDs',uditails,{maxAge:3000});
        res.send({
            ok: true          
        });

    } else {
        res.send({
            ok: false
        });
    }
    console.log(req.body.UserID)
})




app.use(express.static('public'));
app.listen(port, () => { console.log(`listen on port ${port}`) }) 



