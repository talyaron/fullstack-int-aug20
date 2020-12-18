"use strict";

handelclick = function handelclick(e) {
  var buttonInnertext = e.target.value;
  console.log(buttonInnertext);
  fetch('/send-user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      buttonInnertext: buttonInnertext
    })
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    document.getElementById('root').innerHTML = "<p>".concat(data.test, "</p>");
  });
};