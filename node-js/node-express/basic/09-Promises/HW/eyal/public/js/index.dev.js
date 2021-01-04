"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var typingTimer; //timer identifier

var doneTypingInterval = 2000; //time in ms (5 seconds)

var OrigenText = document.getElementById('Origen');
var LangFrom = document.getElementById('LangFrom');
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
          console.log(t);
          t.forEach(function (lang) {
            console.log(lang);
            var LangFrom1 = document.getElementById("LangFrom");
            var LangTo = document.getElementById('LangTo');
            var option = document.createElement("option");
            var option1 = document.createElement("option");
            option.text = lang.name;
            option.value = lang.code;
            option1.text = lang.name;
            option1.value = lang.code;
            LangFrom1.add(option);
            LangTo.add(option1);
          });

        case 6:
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
}); //user is "finished typing," do something

function doneTyping() {
  var ariaTranslated = document.getElementById('transform');
  var LangFrom = document.getElementById('LangFrom');
  var LangTo = document.getElementById('LangTo');
  var message = OrigenText.value;
  console.log(message);

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
      console.log(ariaTranslated);
      document.getElementById('transform').value = data.Transaction;
    });
  } catch (e) {
    console.log(e);
  }
}

function handleLoadLang() {
  var t;
  return regeneratorRuntime.async(function handleLoadLang$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log('handleLoadLang called');
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(fetch('/getLang').then(function (r) {
            return r.json();
          }).then(function (data) {
            t = data; //  document.getElementById('transform').value = data.Transaction;
          }));

        case 4:
          _context2.next = 9;
          break;

        case 6:
          _context2.prev = 6;
          _context2.t0 = _context2["catch"](1);
          console.log(_context2.t0);

        case 9:
          console.log('handleLoadLang OK');
          return _context2.abrupt("return", t);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 6]]);
}