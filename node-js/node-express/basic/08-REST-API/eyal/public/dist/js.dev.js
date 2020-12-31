"use strict";

// const messages = []
var messagesWrapper = document.querySelector('#messagesWrapper');

function handleSubmitMessage(e) {
<<<<<<< HEAD
  e.preventDefault();
  console.log(e);
  var message = e.target.elements.message.value;
  console.log(message); // messages.push(message);

  if (message.length > 2) {
    document.querySelector('#messagesWrapper').innerHTML += htmlMessage(message);
    e.target.reset();
    messagesWrapper.scrollTo(0, messagesWrapper.scrollHeight);
=======
  e.preventDefault(); // console.log(e)

  var message = e.target.elements.message.value; // console.log(message)
  // messages.push(message);

  if (message.length > 2) {
    document.querySelector('#messagesWrapper').innerHTML += htmlMessage(message);
    /* htmlIncomeMessage(message); */

    e.target.reset();
    messagesWrapper.scrollTo(0, messagesWrapper.scrollHeight);
    console.log('start fetch');
    fetch('/SendmMessage', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: message
      })
    }).then(function (r) {
      return r.json();
    }).then(function (data) {
      console.log(data.cnt);
      document.querySelector('#messagesWrapper').innerHTML += htmlMessage(data.cnt);
    });
>>>>>>> master
  }
}

function htmlMessage(message) {
  return "<div class='message'>".concat(message, " <div class=\"tail\"></div> </div>");
}

<<<<<<< HEAD
=======
function htmlIncomeMessage(message) {
  return "<div class='message InMessage' ".concat(message, " <div class=\"tail\"></div> </div>");
}

>>>>>>> master
function handleTextArea(e) {
  if (e.key === 'Enter' && e.shiftKey == true) {
    //submit
    document.getElementById('submitButton').click();
  }
<<<<<<< HEAD
}
=======
}
/* 
        function handleSendCity(e) {
            e.preventDefault();

            const city = e.target.children.city.value;
            console.log(city)

            fetch('/sendCity', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ city })
            })
                .then(r => r.json())
                .then(data => {
                    console.log(data)
                    document.getElementById('weather').innerText = `${Math.round(data.weather.main.temp)} C &#8451;`;
                })
        }
 */
>>>>>>> master
