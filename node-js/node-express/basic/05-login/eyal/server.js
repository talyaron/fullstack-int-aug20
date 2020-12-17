const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-Parser');
const UserDitles = { UserID: "eyal", Pass: "123" }  // default user ditties

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));

app.post('/U_info', (req, res) => {
    const { myUserIDs } = req.cookies;
    console.log('sending to the claient: ' + req.body);
    const uditails = { id: req.body.UserID, pass: req.body.mypass }
    if ((req.body.UserID == UserDitles.UserID) && (req.body.mypass == UserDitles.Pass)) {
      /*   res.redirect("/ok.html"); */
        console.log("passed")
       
        res.send({
            ok: true
        })
    } else {
        /*  res.redirect('/Rejected.html') */
        res.send({
            ok: false
        });
    }
   console.log(req.body.UserID)
})

app.post('/add_user', (req, res) => {
     let  {Users}  = req.cookies;
     
      const uditails = { id: req.body.UserID, pass: req.body.mypass }
  /*  const myusers =  Users.push(req.body.UserID,req.body.mypass);
 */
    // console.log(`add user ${uditails.id}, ${uditails.pass}`)
    
    console.log(req.cookies)
     res.cookie('myUserIDs', uditails, { maxAge: 300000 })
     res.send()
})


const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`listen on port ${port}`) })



