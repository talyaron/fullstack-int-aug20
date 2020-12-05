"use strict";

var _require = require("express"),
    response = _require.response;

fetch('get-number-of-dogs').then(function (response) {
  return response.json();
}).then(function (data) {
  document.getElementById('root').innerText = '';
});