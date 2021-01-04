"use strict";

/* let lastStroke;

function counting(startTime) {
    var elapsedTime = startTime - lastStroke;
    lastStroke = startTime;
    return Math.floor(elapsedTime / 1000);
} */
var typingTimer; //timer identifier

var doneTypingInterval = 2000; //time in ms (5 seconds)

var OrigenText = document.getElementById('Origen'); //on keyup, start the countdown

OrigenText.addEventListener('keyup', function () {
  clearTimeout(typingTimer);

  if (OrigenText.value) {
    typingTimer = setTimeout(doneTyping, doneTypingInterval);
  }
}); //user is "finished typing," do something

function doneTyping() {
  var ariaTranslated = document.getElementById('transform');
  var LangFrom = document.getElementById('LangFrom');
  var LangTo = document.getElementById('LangTo');
  var message = OrigenText.value; /////////////////////////////////////////////////////

  console.log(message); // let startTime = Date.now();
  //if (counting(startTime) > 3) {

  try {
    fetch('/SendTranslation', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        formlang: "".concat(LangFrom.value),
        toLang: "".concat(LangTo.value),
        message: "".concat(message)
      })
    }).then(function (r) {
      return r.json();
    }).then(function (data) {
      console.log(ariaTranslated);
      document.getElementById('transform').value = data.Transaction;
    });
  } catch (e) {
    console.log(e);
  }
} //  }}

/* function handleText(e) {
   
} */


function handleLoadLang() {
  try {
    fetch('/getLang', {
      method: 'GET'
    }).then(function (r) {
      return r.json();
    }).then(function (data) {
      console.log(data); //  document.getElementById('transform').value = data.Transaction;
    });
  } catch (e) {
    console.log(e);
  }
}