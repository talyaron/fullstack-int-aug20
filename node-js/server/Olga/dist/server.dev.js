"use strict";

var http = require('http');

var fs = require('fs'); //create a server object:


http.createServer(function (req, res) {
  fs.readFile('index.html', 'utf-8', function (err, data) {
    res.write(data); //write a response to the client

    res.end(); //end the response
  });
}).listen(3000); //the server object listens on port 3000