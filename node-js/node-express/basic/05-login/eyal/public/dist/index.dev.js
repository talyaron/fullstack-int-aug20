"use strict";

function handlesubmit(e) {
  console.log('handlesubmit activated');
  e.preventDefault();
  console.log('submit');
  var UserID = e.target.UserID.value;
  var mypass = e.target.Password.value;
  var UserDetlis = {
    UserID: UserID,
    mypass: mypass
  };
  fetch('/U_info', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(UserDetlis)
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    if (data.ok) {
      document.getElementById('main').innerHTML = '<h1>ok</h1>';
      window.location.replace('ok.html');
    } else {
      document.getElementById('main').innerHTML = '<h1>bad user name or password</h1>';
      window.location.replace('Rejected.html');
    }

    console.log(data);
    document.getElementById('root').innerText = data.body;
  });
  console.log(UserDetlis);
}

function handleAddUser(e) {
  console.log('handleAddUser activated');
  var UserID = document.getElementById('UserID').value;
  var mypass = document.getElementById('Password').value;
  console.log(UserID);
  var UserDetlis = {
    UserID: UserID,
    mypass: mypass
  };
  console.log(UserDetlis);
  fetch('/Change_user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(UserDetlis)
  }).then(function (res) {
    return res.json();
  }).then(function (data) {});
}