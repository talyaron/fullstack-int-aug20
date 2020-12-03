"use strict";

var http = require("http");

var fs = require("fs");

http.createServer(function (req, res) {
  if (req.url === "/") {
    fs.readFile("index.html", 'utf-8', function (err, data) {
      res.writeHead(200, {
        "content-type": "text/html"
      });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/style.css") {
    fs.readFile("style.css", 'utf-8', function (err, data) {
      res.writeHead(200, {
        "content-type": "text/css"
      });
      res.write(data);
      res.end();
    });
  } else if (req.url === '/favicon.ico') {
    var img = fs.readFileSync('/favicon.ico');
    res.writeHead(200, {
      'Content-Type': 'image/ico'
    });
    res.end(img, 'binary');
  } else {
    fs.readFile("404page.html", 'utf-8', function (err, data) {
      res.writeHead(404, {
        "content-type": "text/html"
      });
      res.write(data);
      res.end();
    });
  }
}).listen(8083, function () {
  console.log('server  on port 8080');
});