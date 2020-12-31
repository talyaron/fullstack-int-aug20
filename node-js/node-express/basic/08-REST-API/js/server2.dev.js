"use strict";

app.post('/SendmMessage', function (req, res) {
  ////AI BOT
  fromLng = 'iw';
  toLng = 'en';
  var toTranslate = req.body.message; //console.log(toTranslate);

  var textToTranslate = encode(toTranslate); //'%D7%91%D7%95%D7%A7%D7%A8%20%D7%98%D7%95%D7%91';
  //////////////////////////////// ביצוע תרגום לאנגלית

  fetch("https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=".concat(fromLng, "%7C").concat(toLng, "&q=").concat(textToTranslate, "&mt=1&onlyprivate=0&de=a%40b.c"), {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "2dae7de7a8msh9ca6fa97f167561p1494d2jsn956ba9663ea0",
      "x-rapidapi-host": "translated-mymemory---translation-memory.p.rapidapi.com"
    }
  }).then(function (response) {
    return response.json({
      response: response
    });
  }).then(function (response) {
    console.log(response.responseData.translatedText);
    var massege = response.responseData.translatedText;
    console.log("the AI gets:".concat(massege)); /////////////////////////// שליחת ההודעה שבאנגלית לבינה מלכותית וקבלת תשובה באנגלית

    fetch("https://acobot-brainshop-ai-v1.p.rapidapi.com/get?bid=178&key=sX5A2PcYZbsN5EY6&uid=mashape&msg=".concat(massege), {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '2dae7de7a8msh9ca6fa97f167561p1494d2jsn956ba9663ea0',
        'x-rapidapi-host': 'acobot-brainshop-ai-v1.p.rapidapi.com'
      }
    }).then(function (response) {
      return response.json({
        response: response
      });
    }).then(function (response) {
      /////////////////////קבלת התשובה מהבינה המלאכותית באנגלית ותרגומה לעברית
      fromLng = 'en';
      toLng = 'iw';
      console.log(response);
      var toTranslate = response.cnt;
      console.log(toTranslate);
      var textToTranslate = encode(toTranslate); //'%D7%91%D7%95%D7%A7%D7%A8%20%D7%98%D7%95%D7%91';

      fetch("https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=".concat(fromLng, "%7C").concat(toLng, "&q=").concat(textToTranslate, "&mt=1&onlyprivate=1&de=a%40b.c"), {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "2dae7de7a8msh9ca6fa97f167561p1494d2jsn956ba9663ea0",
          "x-rapidapi-host": "translated-mymemory---translation-memory.p.rapidapi.com"
        }
      }).then(function (response) {
        return response.json({
          response: response
        });
      }).then(function (response) {
        console.log(response);
        console.log(response.responseData.translatedText); //  let {test} = response.responseData.translatedText

        res.send(response);
      })["catch"](function (err) {
        console.error(err);
      });
    })["catch"](function (err) {
      console.error(err);
    });
  })["catch"](function (err) {
    console.error(err);
  });
});
/* app.post('/SendmMessage', translate, (req, res,next) => {
////AI BOT
// translate('en', 'iw');
 let massege  = res.translate;
console.log(`the AI gets:${massege}`)
fetch(
 `https://acobot-brainshop-ai-v1.p.rapidapi.com/get?bid=178&key=sX5A2PcYZbsN5EY6&uid=mashape&msg=${massege}`,
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
console.log(response);
res.send(response);
 })
 .catch((err) => {
console.error(err);
 });
 next();
}); */