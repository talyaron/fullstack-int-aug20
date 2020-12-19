"use strict";

function handleSubmit(e) {
  e.preventDefault();
  var username = e.target.children.username.value;
  var password = e.target.children.password.value;
  var user = {
    username: username,
    password: password
  };
  console.log(username, password);
  fetch('/check-user', {
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

    if (data.check == true) {
      location.replace("/homepage.html");
    } else {
      var errorText = document.querySelector('.errorText');
      errorText.innerHTML = 'login failed';
    }
  });
}