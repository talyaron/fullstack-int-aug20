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


app.post('/checkAuthorization',async (req, res) => { //req = request from client; res = response to client

  try {
    const {
      password
    } = req.body;

    let result = await isAuthorized(password);
    console.log(result)

    res.send({
      result
    })
  } catch (e) {
    console.log('at sendMultiply', e);

    res.send({
      number: 0,
      ok: false,
      error: e
    })
  }
})


async function isAuthorized(password) {

let data;
 await fetch('http://localhost:3001/isAuthorized', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password
      })

    }).then(r => r.json())
    .then(result => {

    console.log(result)
    data = result;

    }).catch(e => {
      // reject(e)
      console.log(e)
    })

    return data;
}


app.listen(3000, () => {
  console.log('listen 3000')
})