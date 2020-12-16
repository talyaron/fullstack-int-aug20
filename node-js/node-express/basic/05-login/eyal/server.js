const express = require('express');
const app = express();
const path = require('path');
const cookiesPractice = require('cookie-parser');
const bodyParser = require('body-Parser');
const UserDitles = { UserID: "eyal", Pass: "123" }

app.use(bodyParser.json());
app.use(cookiesPractice());
app.use(express.static(path.join(__dirname,'public')));

app.post('/U_info', (req, res) => {
    const { myUserIDs } = req.cookies;
    console.log('sending to the claient: ' + req.body);
    const uditails = { id: req.body.UserID, pass: req.body.mypass }
    if ((req.body.UserID == UserDitles.UserID) && (req.body.mypass == UserDitles.Pass)) {
      /*   res.redirect("/ok.html"); */
        console.log("passed")
        // res.cookie('myUserIDs', uditails, { maxAge: 3000 });
        res.send({
            ok: true
        })
    } else {
        /*  res.redirect('/Rejected.html') */
        res.send({
            ok: false
        });
    }
  //  console.log(req.body.UserID)
})




const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`listen on port ${port}`) })



