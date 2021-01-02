/******************************************
<<<<<<< HEAD
 *  Author : eyal shemuel   
=======
 *  Author : eyal shemuel
>>>>>>> master
 *  Created On : Mon Dec 28 2020
 *  File : server.js.js
 *******************************************/

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fetch = require('node-fetch');
<<<<<<< HEAD
=======
const { encode, decode } = require('url-encode-decode')
>>>>>>> master

const app = express();
const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(bodyParser.json());
<<<<<<< HEAD
app.use(express.static('public'))


app.get('/sendCity', (req, res) => {
    console.log('tt')


    fetch("https://dark-sky.p.rapidapi.com/33,33?lang=en&units=auto", {
        method: "GET",
        headers: {
            "x-rapidapi-key": "2dae7de7a8msh9ca6fa97f167561p1494d2jsn956ba9663ea0",
            "x-rapidapi-host": "dark-sky.p.rapidapi.com"
        }
    }).then(response => response.json())
        .then(response => {
            console.log(response);
            res.send(response);
        })
        .catch(err => {
            console.error(err);
        });




})



app.listen(port, () => { console.log(`Listen on port ${port}`) });
=======
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
        'x-rapidapi-key': '2dae7de7a8msh9ca6fa97f167561p1494d2jsn956ba9663ea0',
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
      "x-rapidapi-key": "2dae7de7a8msh9ca6fa97f167561p1494d2jsn956ba9663ea0",
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
>>>>>>> master
