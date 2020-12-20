//https://www.xspdf.com/resolution/50688133.html
// https://www.w3schools.com/js/js_cookies.asp

const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-Parser');
const UserDitles = { UserID: "eyal", Pass: "123" }  // default user ditties

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('public'))

app.post('/U_info', (req, res) => {
    const {myUserIDs} = req.cookies;
    let test = myUserIDs;
    console.log(myUserIDs);
    const uditails = { id: req.body.UserID, pass: req.body.mypass }
    if ((req.body.UserID == UserDitles.UserID) && (req.body.mypass == UserDitles.Pass)) {
        console.log("passed")
        
        res.send({
            ok: true
        })
        // res.redirect("/ok.html")
    } else {
        /*  res.redirect('/Rejected.html') */
        res.send({
            ok: false
        });
    }
    console.log(req.body.UserID)
})

app.post('/add_user', (req, res) => {})

// add user to cookie
app.post('/Change_user', (req, res) => {
  //  let { Users } = req.cookies;
    const uditails = { id: req.body.UserID, pass: req.body.mypass }
    let ud = JSON.stringify(uditails);
    //let Users1 = JSON.stringify(Users);

   /*  console.log(Users)
    if ((Users==null) || (Users==undefined)){
        test = `${ud}`;
    }else{
        test = `${Users},${ud}`;
    } */
    test = `${ud}`;
  //  console.log(test)
    res.cookie('myUserIDs', test, { maxAge: 300000 })
    res.send()
})




const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`listen on port ${port}`) })



