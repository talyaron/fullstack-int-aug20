"use strict";

var artist = 'michael jackson';
var song = 'bad';

function getData(e) {
  var root, root2, url, Lyrics;
  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // e.preventDefault()
          // artist = e.target.children.artist.value;
          // song = e.target.children.song.value;
          root = document.querySelector('.root');
          root2 = document.querySelector('.root2');
          _context.next = 4;
          return regeneratorRuntime.awrap(getImg());

        case 4:
          url = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(getLyrics());

        case 7:
          Lyrics = _context.sent;
          root.innerHTML = "<img src='".concat(url, "'>");
          root2.innerHTML = "<p>".concat(Lyrics, "</p>");

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
}

function getLyrics() {
  var status;
  return regeneratorRuntime.async(function getLyrics$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch("https://sridurgayadav-chart-lyrics-v1.p.rapidapi.com/apiv1.asmx/SearchLyricDirect?artist=michael%20jackson&song=bad", {
            "method": "GET",
            "headers": {
              "x-rapidapi-key": "3141833d07msh1c4d90f6d62efb2p1b4fccjsn887bca0704a2",
              "x-rapidapi-host": "sridurgayadav-chart-lyrics-v1.p.rapidapi.com"
            }
          }).then(function (response) {
            return response.text();
          }).then(function (xmlString) {
            return $.parseXML(xmlString);
          }).then(function (data) {
            Lyrics = data.getElementsByTagName('Lyric')[0].innerHTML;
            console.log(Lyrics);
            status = Lyrics;
          })["catch"](function (e) {
            console.error(e);
          }));

        case 2:
          return _context2.abrupt("return", status);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
}

getData();

function getImg() {
  var url;
  return regeneratorRuntime.async(function getImg$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(fetch('https://picsum.photos/200/300', {}).then(function (data) {
            url = data.url;
          })["catch"](function (e) {
            console.error(e);
          }));

        case 2:
          return _context3.abrupt("return", url);

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
} // xmlh


function getLyrics2() {
  return new Promise(function (resolve, reject) {
    var Lyrics;
    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        var xml = this.responseText; // console.log(xml)

        var parser = new DOMParser(),
            xmlDoc = parser.parseFromString(xml, 'text/xml'); // console.log(xmlDoc.getElementsByTagName('Lyric')[0].innerHTML)

        Lyrics = xmlDoc.getElementsByTagName('Lyric')[0].innerHTML;
        resolve(Lyrics);
      }
    });
    xhr.open("GET", "https://sridurgayadav-chart-lyrics-v1.p.rapidapi.com/apiv1.asmx/SearchLyricDirect?artist=michael%20jackson&song=bad");
    xhr.setRequestHeader("x-rapidapi-key", "3141833d07msh1c4d90f6d62efb2p1b4fccjsn887bca0704a2");
    xhr.setRequestHeader("x-rapidapi-host", "sridurgayadav-chart-lyrics-v1.p.rapidapi.com");
    xhr.send(data);
  });
} //   return Lyrics;
// }
// xmlh