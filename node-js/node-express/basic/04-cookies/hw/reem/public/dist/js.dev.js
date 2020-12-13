"use strict";

function handleSubmit(e) {
  e.preventDefault();
  var user = e.target.value;
  var root = document.querySelector('.root');
  root.innerText += "".concat(user);
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
    console.log(data); // let root = document.querySelector('root')
    // root.innerHTML+=`${user}`
  });
  document.cookie;
}