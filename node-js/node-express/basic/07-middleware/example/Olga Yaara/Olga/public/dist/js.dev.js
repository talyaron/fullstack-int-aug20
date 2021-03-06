"use strict";

function handleLogin(e) {
  e.preventDefault();
  var password = e.target.children.password.value;
  var username = e.target.children.username.value;
  console.log(password, username);
  fetch('/login', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  }).then(function (r) {
    return r.json();
  }).then(function (data) {
    console.log(data.role);
    location.replace('index2.html');
  });
}