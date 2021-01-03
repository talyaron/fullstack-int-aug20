/******************************************
 *  Author : eyal shemuel
 *  Created On : Mon Dec 28 2020
 *  File : server.js.js
 * 
 * https://rapidapi.com/cloud-actions-cloud-actions-default/api/google-ai-vision?endpoint=apiendpoint_9279cd90-1910-4cae-b5ff-c3ea68bc9777
 * this api can:
 *         find faces in image
 *         Detect Image Object
 *         Facial Emotion Recognition
 *         covert Image to Text
 * and more
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

  try {
    /* console.log(req.body.message) */

    const EngTransaction = await translate('iw', 'en', req.body.message)// translate massage to english
    /* console.log(EngTransaction) */

    const RobotMassage = await SendMessageToRobot(EngTransaction)// send massage to the robot 
    /* console.log(RobotMassage) */

    const hebTransaction = await translate('en', 'iw', RobotMassage)//translate massage to hebrew
    /* console.log(hebTransaction) */

    res.send({ hebTransaction });
  } catch (e) {
    console.log(e);
  }



});


async function SendMessageToRobot(massage) {
  let robotResponseMsg;
  await fetch(
    //  `https://acobot-brainshop-ai-v1.p.rapidapi.com/get?bid=178&key=sX5A2PcYZbsN5EY6&uid=mashape&msg=${massage}`,
    ` https://acobot-brainshop-ai-v1.p.rapidapi.com/get?bid=154389&key=MqKbUKOqNKyU0Dmg&uid=moshe&msg=${massage}`,
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



async function setKey() {
  let key;
  await fetch("https://translated-mymemory---translation-memory.p.rapidapi.com/createkey", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "2dae7de7a8msh9ca6fa97f167561p1494d2jsn956ba9663ea0",
      "x-rapidapi-host": "translated-mymemory---translation-memory.p.rapidapi.com"
    }
  })
    .then(response => {
      key = response;
    })
    .catch(err => {
      console.error(err);
    });
  return key;
}




async function translate(fromLng, toLng, massage) {
  let translatedMessage;
  let textToTranslate = encode(massage);
  //let Tkey = await setKey;// no nead - so canceld
  await fetch(`
  https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=${fromLng}%7C${toLng}&q=${textToTranslate}&mt=1&onlyprivate=1&de=a%40b.c`, {
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




const getFaceFromImage = async (imageUrl) => {
  //how to get img from webcam   -   https://medium.com/swlh/how-to-access-webcam-and-take-picture-with-javascript-b9116a983d78
  //                                  https://bensonruan.com/how-to-access-webcam-and-take-photo-with-javascript/
  const form = new FormData(img);
  form.append("image", `${img}`);

  await fetch("https://facedetection9.p.rapidapi.com/faces", {
    "method": "POST",
    "headers": {
      "content-type": "multipart/form-data; boundary=---011000010111000001101001",
      "x-rapidapi-key": "2dae7de7a8msh9ca6fa97f167561p1494d2jsn956ba9663ea0",
      "x-rapidapi-host": "facedetection9.p.rapidapi.com"
    }
  })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.error(err);
    });

}




app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
