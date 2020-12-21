"use strict";

function handleSubmit(e) {
  e.preventDefault();
  var username = e.target.children.username.value;
  var password = e.target.children.password.value;
  console.log("username: ".concat(username, ", password: ").concat(password));
  fetch("/send-user-data", {
    method: "POST",
    // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    if (data.validation) {
      window.location.replace("logged.html");
    } else {
      document.getElementById("root").innerHTML = "Sorry, Wrong credentials!";
    }
  });
}