"use strict";

var http = require('http');

var fs = require('fs');

var count = 1; //create a server object:

http.createServer(function (req, res) {
  try {
    console.log("".concat(count++, ") ").concat(req.url));

    if (req.url === '/') {
      fs.readFile('index.html', 'utf-8', function (err, data) {
        try {
          if (err) throw err;
          res.writeHead(200, {
            'Content-Type': 'text/html'
          });
          res.write(data); //write a response to the client

          res.end(); //end the response
        } catch (e) {
          console.error('11', e);
        } finally {
          if (err) {
            fs.readFile('500.html', 'utf-8', function (err, data) {
              res.writeHead(405, {
                'Content-Type': 'text/html'
              });
              res.write(data);
              res.end();
            });
          }
        }
      });
    } else if (req.url === '/style.css') {
      fs.readFile('style.css', 'utf-8', function (err, data) {
        if (err) throw err;
        res.writeHead(200, {
          'Content-Type': 'text/css'
        });
        res.write(data); //write a response to the client

        res.end(); //end the response
      });
    } else if (req.url === '/function.js') {
      fs.readFile('function.js', 'utf-8', function (err, data) {
        if (err) throw err;
        res.writeHead(200, {
          'Content-Type': 'text/javascript'
        });
        res.write(data); //write a response to the client

        res.end(); //end the response
      });
    } else if (req.url === '/favicon.ico') {
      var img = fs.readFileSync('./favicon.ico');
      res.writeHead(200, {
        'Content-Type': 'image/ico'
      });
      res.end(img, 'binary');
    } else {
      fs.readFile('404.html', 'utf-8', function (err, data) {
        if (err) throw err;
        res.writeHead(404, {
          'Content-Type': 'text/html'
        });
        res.write(data); //write a response to the client

        res.end(); //end the response
      });
    }
  } catch (e) {
    console.error('Error:', e);
    fs.readFile('500.html', 'utf-8', function (err, data) {
      res.writeHead(500, {
        'Content-Type': 'text/html'
      });
      res.write(e);
      res.end();
    });
  }
}).listen(8080, function () {
  console.log('server listen on port 8080');
});