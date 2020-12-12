"use strict";

function handleSubmit(e) {
  e.preventDefault();
  var user = e.target.children.user.value;
  fetch('/send-user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: user
    })
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    console.log(data);
    var root = document.querySelector('root');
    root.innerHTML += "".concat(user);
  });
  document.cookie;
}