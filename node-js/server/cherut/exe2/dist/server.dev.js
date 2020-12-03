"use strict";

var http = require('http'); //create a server object:


http.createServer(function (req, res) {
  res.write('<h1>Hello World!</h1><p>Wallaa!</p>'); //write a response to the client

  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080