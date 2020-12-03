"use strict";

var http = require('http');

var fs = require('fs');

var _require = require('constants'),
    RSA_NO_PADDING = _require.RSA_NO_PADDING;

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
  } else if (req.url === '/style.css') {
    fs.readFile('style.css', 'utf-8', function (err, data) {
      res.writeHead(200, {
        'Content-Type': 'text/css'
      });
      res.write(data);
      res.end();
    });
  } else if (req.url === '/script.js') {
    fs.readFile('script.js', 'utf-8', function (err, data) {
      res.writeHead(200, {
        'Content-Type': 'text/javascript'
      });
      res.write(data);
      res.end();
    });
  } else if (req.url === '/img/bg.jpg') {
    var img = fs.readFileSync('/img/bg.jpg');
    res.writeHead(200, {
      'Content-Type': 'image/jpeg'
    });
    res.end(img, 'binary');
  } else if (req.url === '/img/0.png') {
    var _img = fs.readFileSync('/img/0.png');

    res.writeHead(200, {
      'Content-Type': 'image/png'
    });
    res.end(_img, 'binary');
  } else if (req.url === '/img/1.png') {
    var _img2 = fs.readFileSync('/img/1.png');

    res.writeHead(200, {
      'Content-Type': 'image/png'
    });
    res.end(_img2, 'binary');
    no;
  } else if (req.url === '/img/2.png') {
    var _img3 = fs.readFileSync('/img/2.png');

    res.writeHead(200, {
      'Content-Type': 'image/png'
    });
    res.end(_img3, 'binary');
  } else if (req.url === '/img/3.png') {
    var _img4 = fs.readFileSync('/img/3.png');

    res.writeHead(200, {
      'Content-Type': 'image/png'
    });
    res.end(_img4, 'binary');
  } else if (req.url === '/img/4.png') {
    var _img5 = fs.readFileSync('/img/4.png');

    res.writeHead(200, {
      'Content-Type': 'image/png'
    });
    res.end(_img5, 'binary');
  } else if (req.url === '/img/5.png') {
    var _img6 = fs.readFileSync('/img/5.png');

    res.writeHead(200, {
      'Content-Type': 'image/png'
    });
    res.end(_img6, 'binary');
  } else if (req.url === '/img/6.png') {
    var _img7 = fs.readFileSync('/img/6.png');

    res.writeHead(200, {
      'Content-Type': 'image/png'
    });
    res.end(_img7, 'binary');
  } else {
    fs.readFile('404.html', 'utf-8', function (err, data) {
      res.writeHead(404, {
        'Content-Type': 'text/html'
      });
      res.write(data);
      res.end();
    });
  }
}).listen(3001, function () {
  console.log("on listen 3001");
});