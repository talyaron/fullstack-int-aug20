"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var typingTimer; //timer identifier

var doneTypingInterval = 2000; //time in ms (5 seconds)

var OrigenText = document.getElementById('Origen');
var LangFrom = document.getElementById('LangFrom');
var LangTo = document.getElementById('LangTo');
window.addEventListener('load', function _callee() {
  var allLangs, t;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(handleLoadLang());

        case 2:
          allLangs = _context.sent;
          t = _toConsumableArray(allLangs);
          t.forEach(function (lang) {
            var option = document.createElement("option");
            option.text = lang.name;
            option.value = lang.code;
            LangFrom.add(option);
            option.text = lang.name;
            option.value = lang.code;
            LangTo.add(option);
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}); //on keyup, start the countdown

OrigenText.addEventListener('keyup', function () {
  clearTimeout(typingTimer);

  if (OrigenText.value) {
    typingTimer = setTimeout(doneTyping, doneTypingInterval);
  }
}); //user is "finished typing"

function doneTyping() {
  var LangFrom = document.getElementById('LangFrom');
  var LangTo = document.getElementById('LangTo');
  var message = OrigenText.value;

  try {
    fetch('/SendTranslation', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        formlang: "".concat(LangFrom.value),
        toLang: "".concat(LangTo.value),
        message: "".concat(message)
      })
    }).then(function (r) {
      return r.json();
    }).then(function (data) {
      document.getElementById('transform').innerHTML = "<p>".concat(data.transaction, "</p>");
    });
  } catch (e) {
    console.log(e);
  }
}

function handleLoadLang() {
  var _t;

  return regeneratorRuntime.async(function handleLoadLang$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(fetch('/getLang').then(function (r) {
            return r.json();
          }).then(function (data) {
            return _t = data;
          }));

        case 3:
          _context2.next = 8;
          break;

        case 5:
          _context2.prev = 5;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);

        case 8:
          return _context2.abrupt("return", t);

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 5]]);
}