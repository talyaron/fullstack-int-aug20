"use strict";

function getUsername(e) {
  fetch("/get-username").then(function (r) {
    return r.json();
  }).then(function (data) {
    document.getElementById("root").innerHTML = "Hey ".concat(data.savedUsername, ", Welcome home.");
  });
}

setInterval(function () {
  fetch("/check-valid").then(function (r) {
    return r.json();
  }).then(function (data) {
    if (data.validate) {
      console.log("validated");
    } else {
      window.location.replace("index.html");
    }
  });
}, 3000);