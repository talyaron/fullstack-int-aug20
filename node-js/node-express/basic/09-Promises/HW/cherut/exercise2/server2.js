const express = require('express')
const app = express(); ///server
const bodyParser = require('body-parser');
const {
  response
} = require('express');
const fetch = require('node-fetch');
var cors = require('cors')

app.use(cors());
app.use(bodyParser.json())
app.use(express.static('public'))


app.post('/isAuthorized', (req, res) => {   //req = request from client; res = response to client

  corectPwd = "123";
  let Authorized = false;

  try {

      const { password } = req.body;
      if (password === corectPwd){
        Authorized = true;
      }

      res.send({ Authorized })

  } catch (e) {
      console.log('at sendMultiply', e);clearImmediate
      res.send({ number: 0, ok: false, error:e })
  }
})


app.listen(3001, () => {
  console.log('listen 3001')
})