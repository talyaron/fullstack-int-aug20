"use strict";

//from 1:09:50 to 1:25:10 - break
//------------------------------------------
//npm init --y => in the terminal - create package.json for star working - all the options are on default
//for run - node (name of file) kat.js
//going to localhost:8080 in brauser to see the page - we work in localhost because we dont wont to change any thing in the global
//------------------------------------------
//ctrl + c = closing the server
//------------------------------------------
//prodaction - people using the site
//------------------------------------------
//npm install -g nodemon => nodemon is a tool that helps develop node.js based. (-g = global - means it will work in all files from now)
//applications by automatically restarting the node application when file changes in the directory are detected.
//if the nodemon do not work - write cmd => Enter => nodemon 'file name' //nodemon dont work with powershell - powershell it is like cmd just with bigger options
//------------------------------------------
//the node has built-in modules
//------------------------------------------
var http = require('http'); //Imports http module from node


var fs = require('fs'); //file system
// const { count } = require('console');


var count = 1; // http.createServer((req, res) => { //creating server - request and respons בקשה ותגובה
//     res.write('<h1>Hello World!</h1><h2>What the fuck</h2>'); //Write a response to the client
//     res.end(); //end the response
// }).listen(8080, () => { //the server object listens on port 8080
//     console.log('server listen on port 8080') //we can do indecation that the server listening
// });

http.createServer(function (req, res) {
  // console.log(req.url); //show us what going after what
  console.log("".concat(count++, ") ").concat(req.url)); // show with numbers what going after what

  if (req.url === '/') {
    fs.readFile('index.html', 'utf-8', function (err, data) {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      }); //https://www.restapitutorial.com/httpstatuscodes.html - codes of server

      res.write(data);
      res.end();
    });
  } else if (req.url === '/style.css') {
    fs.readFile('style.css', 'utf-8', function (err, data) {
      res.writeHead(200, {
        'Content-Type': 'text/css'
      });
      res.write(data);
      res.end();
    });
  } else if (req.url === '/function.js') {
    fs.readFile('function.js', 'utf-8', function (err, data) {
      res.writeHead(200, {
        'Content-Type': 'text/javascript'
      });
      res.write(data);
      res.end();
    });
  } else {
    fs.readFile('404.html', 'utf-8', function (err, data) {
      res.writeHead(400, {
        'Content-Type': 'text/html'
      });
      res.write(data);
      res.end();
    });
  }
}).listen(8080, function () {
  console.log('server listen on port 8080');
});