"use strict";

function handleSubmit(e) {
  e.preventDefault();
  var username = e.target.children.username.value;
  var password = e.target.children.password.value;
  var value = {
    password: password,
    username: username
  };
  console.log(password, username);
  fetch('/check-user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      value: value
    })
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    console.log(data);

    if (data.k == true) {
      console.log(data.k);
      document.body.style.backgroundColor = 'green';
      document.getElementById('root').innerHTML = "Welcome  ".concat(data.user, " ");
    } else {
      console.log(data.k);
      document.body.style.backgroundColor = 'red';
      document.getElementById('root').innerHTML = " The username or password are inncorrect. please enter try agian ";
    }
  });
}