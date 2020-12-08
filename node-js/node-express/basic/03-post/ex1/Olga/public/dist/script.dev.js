"use strict";

var username = e.target.username.value;
var password = e.target.password.value;
console.log(password, username);

function handleSubmit(e) {
  fetch('/send-user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username
    }, {
      password: password
    })
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    console.log(data);
  });
}