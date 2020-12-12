const express = require('express');
const app = express();
const UserDitles = { UserID: "eyal", Pass: "123" }

const bodyParser = require('body-Parser');

app.use(bodyParser.json());

app.use(express.static('public'))

app.post('/send_user_information', (req, res) => {

    console.log('sending to the claient: ' + req.body);
    if ((req.body.UserID == UserDitles.UserID) && (req.body.mypass == UserDitles.Pass)) {

        res.send({
            ok: true
            /*  ,USER: req.body.UserID,
             Pass: req.body.mypass,
             userdb: UserDitles.UserID */
        });

    } else {
        res.send({
            ok: false
        });
    }

})

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`listen on port ${port}`) }) 
