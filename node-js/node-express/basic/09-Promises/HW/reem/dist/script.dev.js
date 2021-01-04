"use strict";

function getData() {
  var root, root2, url, status;
  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          root = document.querySelector('.root');
          root2 = document.querySelector('.root2');
          _context.next = 4;
          return regeneratorRuntime.awrap(getImg());

        case 4:
          url = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(getLyrics());

        case 7:
          status = _context.sent;
          // console.log(url);
          // console.log(status);
          root.innerHTML = "<img src='".concat(url, "'>");
          root2.innerHTML = "<h1>".concat(responseText, "</h1>");

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
}

getData();

function getImg() {
  var url;
  return regeneratorRuntime.async(function getImg$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch('https://picsum.photos/200/300', {}).then(function (data) {
            url = data.url;
          })["catch"](function (e) {
            console.error(e);
          }));

        case 2:
          return _context2.abrupt("return", url);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function getLyrics() {
  var artist, song, status;
  return regeneratorRuntime.async(function getLyrics$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          artist = 'michael jackson';
          song = 'bad';
          console.log(encodeURI(artist));
          _context3.next = 5;
          return regeneratorRuntime.awrap(fetch("https://sridurgayadav-chart-lyrics-v1.p.rapidapi.com/apiv1.asmx/SearchLyricDirect?artist=".concat(encodeURI(artist), "&song=").concat(song), {
            "method": "GET",
            "headers": {
              "x-rapidapi-key": "3141833d07msh1c4d90f6d62efb2p1b4fccjsn887bca0704a2",
              "x-rapidapi-host": "sridurgayadav-chart-lyrics-v1.p.rapidapi.com"
            }
          }).then(function (data) {
            console.log(data);
            status = data.status;
          })["catch"](function (e) {
            console.error(e);
          }));

        case 5:
          return _context3.abrupt("return", status);

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  });
} // xmlh


var data = null;
var responseText;
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    responseText = this.responseText;
    console.log(this.responseText.xml2json);
    this.responseText.xml2json;
  }
});
xhr.open("GET", "https://sridurgayadav-chart-lyrics-v1.p.rapidapi.com/apiv1.asmx/SearchLyricDirect?artist=michael%20jackson&song=bad");
xhr.setRequestHeader("x-rapidapi-key", "3141833d07msh1c4d90f6d62efb2p1b4fccjsn887bca0704a2");
xhr.setRequestHeader("x-rapidapi-host", "sridurgayadav-chart-lyrics-v1.p.rapidapi.com");
xhr.send(data); // xmlh