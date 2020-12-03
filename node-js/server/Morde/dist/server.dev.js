"use strict";

var http = require('http');

var fs = require('fs'); //create a server object:


http.createServer(function (req, res) {
  if (req.url === '/') {
    fs.readFile('index.html', function (err, data) {
      res.write(data); //write a response to the client

      res.end(); //end the response
    });
  } else if (req.url === '/dist/style.css') {
    fs.readFile('dist/style.css', function (err, data) {
      res.write(data); //write a response to the client

      res.end(); //end the response
    });
  } else if (req.url === '/js.js') {
    fs.readFile('js.js', function (err, data) {
      res.write(data); //write a response to the client

      res.end(); //end the response
    });
  } else if (req.url === '/hangman.png') {
    var img = fs.readFileSync('./hangman.png');
    res.end(img, 'binary');
  }
}).listen(8080, function () {
  console.log('server listen on port 8080');
});