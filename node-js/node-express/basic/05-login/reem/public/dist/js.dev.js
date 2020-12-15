"use strict";

function handleSubmit(e) {
  try {
    e.preventDefault();
    var name = e.target.children.name.value;
    var pwd = e.target.children.pwd.value;
    var user = {
      name: name,
      pwd: pwd
    };
    console.log(user);
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: user
      })
    }).then(function (r) {
      return r.json();
    }).then(function (data) {
      if (data.ok) {
        location.replace("/success.html");
      } else {
        var root = document.querySelector('.root');
        root.innerHTML = 'login failed';
      }
    });
  } catch (e) {
    console.error(e);
  }
}