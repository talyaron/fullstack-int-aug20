"use strict";

var http = require('http');

var fs = require('fs');

http.createServer(function (req, res) {
  console.log(req.url);

  if (req.url === '/') {
    fs.readFile('index.html', 'utf-8', function (err, data) {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.write(data);
      res.end();
    });
  } else if (req.url === '/dist/style.css') {
    fs.readFile('dist/style.css', 'utf-8', function (err, data) {
      res.writeHead(200, {
        'Content-Type': 'text/css'
      });
      res.write(data);
      res.end();
    });
  } else if (req.url === '/js.js') {
    fs.readFile('js.js', 'utf-8', function (err, data) {
      res.writeHead(200, {
        'Content-Type': 'text/javascript'
      });
      res.write(data); //write a response to the client

      res.end(); //end the response
    });
  }
}).listen(8086, function () {
  console.log('server listen on port 8080');
});