"use strict";

function handleSubmit(e) {
  e.preventDefault();
  var user = e.target.value;
  var root = document.querySelector('.root');
  root.innerHTML += "<h1>".concat(user, "</h1>");
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
    var arr = data.arr;
    console.log(arr);
    document.querySelector('root').innerHTML = "<p>".concat(data.json_str, "</p>"); // let root = document.querySelector('root')
    // root.innerHTML+=`${user}`
  });
}