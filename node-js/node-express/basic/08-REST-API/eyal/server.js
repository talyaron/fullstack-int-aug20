/******************************************
 *  Author : eyal shemuel
 *  Created On : Mon Dec 28 2020
 *  File : server.js.js
 *******************************************/

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fetch = require('node-fetch');
const { encode, decode } = require('url-encode-decode')

const app = express();
const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/SendMessage', async (req, res) => {
  
  try{
    console.log(req.body.message)
// translate massage to english
const EngTransaction = await translate('iw', 'en', req.body.message)
console.log(EngTransaction)
// send massage to the robot 
const RobotMassage = await SendMessageToRobot(EngTransaction)
console.log(RobotMassage)
//translate massage to hebrew
const hebTransaction = await translate('en', 'iw', RobotMassage)
console.log(hebTransaction)

res.send({hebTransaction});
  }catch(e){
    console.log(e);
  }
  


});


async function SendMessageToRobot(massage) {
  let robotResponseMsg;
  await fetch(
    `https://acobot-brainshop-ai-v1.p.rapidapi.com/get?bid=178&key=sX5A2PcYZbsN5EY6&uid=mashape&msg=${massage}`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '',
        'x-rapidapi-host': 'acobot-brainshop-ai-v1.p.rapidapi.com',
      },
    }
  )
    .then((response) => response.json({ response }))
    .then((response) => {
      robotResponseMsg = response.cnt;
    })
    .catch((err) => {
      console.error(err);
    });
  return robotResponseMsg;
}


async function translate(fromLng, toLng, massage) {
  let translatedMessage;
  let textToTranslate =  encode(massage);

  await fetch(`https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=${fromLng}%7C${toLng}&q=${textToTranslate}&mt=1&onlyprivate=0&de=a%40b.c`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "",
      "x-rapidapi-host": "translated-mymemory---translation-memory.p.rapidapi.com"
    }
  }).then((response) => response.json({ response }))
    .then(response => {
      translatedMessage = response.responseData.translatedText;
    })
    .catch(err => {
      console.error(err)
    })
  return translatedMessage;
}



app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
