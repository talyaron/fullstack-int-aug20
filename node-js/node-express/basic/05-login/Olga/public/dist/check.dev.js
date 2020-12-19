"use strict";

console.log(document.cookie);
setInterval(function () {
  if (!document.cookie) {
    location.replace("/");
  }
}, 10000);