const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');

app.use(bodyParser.json())
app.use(cookieParser());

let correctUser = {name: 'cherut', pass:'123'};

app.post('/login', (req, res) => {
    let user = req.body.user;
    // console.log(user,correctUser)

    if (user.name == correctUser.name && user.pass == correctUser.pass){
      res.cookie('user', user, { maxAge: 10000, httpOnly:false});
      console.log('home');
      res.send({ ok: true })
      // res.redirect('./home');
    } else {
      res.send({ ok: false })
    }
})  

app.use(express.static('public'))

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Listen on port ${port}`) });
