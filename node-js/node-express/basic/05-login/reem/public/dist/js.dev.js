"use strict";

var _require = require("body-parser"),
    json = _require.json;

fetch('/send-login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    userInput: userInput
  })
}).then(function (r) {
  return r.json();
});