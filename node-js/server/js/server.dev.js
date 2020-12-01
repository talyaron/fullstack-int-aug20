"use strict";

/*
 const http = require('http');

http.createServer((req, res) => {
    res.write('<h1>Hello World!</h1><p>testing 123</p>');
    res.end(); 
}).listen(8080,()=>{
    console.log('server listen on port 8080')
});
 */
var imgPath = 'project\img';
var csspath = 'project\css';
var jspath = 'project\js';

var http = require('http');

var fs = require('fs');

function load(path, type, req, res) {
  /* 'project/index.html' */
  var typeText;

  switch (type) {
    case 'css':
      typeText = "{'content-type': 'text/css'}";
      break;

    case 'html':
      typeText = "{'content-type': 'text/html'}";
      break;

    case 'js':
      typeText = "{'content-type': 'text/script'}";
      break;

    case 'img':
      typeText = "{'content-type': 'image/ico'}";
      break;

    default:
      typeText = "";
  }

  if (type != "img") {
    fs.readFile(path, 'utf-8', function (error, data) {
      res.writeHead(200, typeText);
      res.write(data);
      res.end();
    });
  } else if (type === "img") {
    var img = fs.readFileSync(path);
    res.writeHead(200, typeText);
    res.end(img, 'binary');
  }
}

function getSuffix(url) {
  for (i = 0; i < url.length; i++) {
    if (url[i] === '.') {
      var _Suffix = url[i + 1] + url[i + 2] + url[i + 3];
    } else {
      return '/';
    }
  }

  return Suffix;
}

http.createServer(function (req, res) {
  console.log(req.url);
  var url = req.url;
  var Suffix = getSuffix(url);
  var fileName = url.split('\\').pop().split('/').pop();
  console.log(fileName);

  if (req.url === '/') {
    fs.readFile('project/index.html', 'utf-8', function (error, data) {
      res.writeHead(200, {
        'content-type': 'text/html'
      });
      res.write(data);
      res.end();
    });
  }

  load(url.slice(1), Suffix, req, res);
}).listen(8080, function () {
  console.log('server listen on port 8080');
}); // if (req.url === Suffix) {
//     fs.readFile('project/index.html', 'utf-8', (error, data) => {
//         res.writeHead(200, {'content-type': 'text/html'})
//         res.write(data);
//         res.end();
//     })
// } else if (req.url === `/${path}`) {
//     res.writeHead(200, {'content-type': 'text/css'})
//     fs.readFile('project/css/style.css', 'utf-8', (error, data) => {
//         res.write(data);
//         res.end();
//     })
// } else if (req.url === '/img/hangman.png') {
//    /*  res.writeHead(200, {'content-type': 'text/css'}) */
//     const img = fs.readFileSync('project/img/hangman.png');
//         res.writeHead(200, {'content-type': 'image/ico'})
//         res.end(img,'binary');
// }else if (req.url === '/js/data.js') {
//     /*  res.writeHead(200, {'content-type': 'text/css'}) */
//      fs.readFile('project/js/data.js', 'utf-8', (error, data) => {
//          res.write(data);
//          res.end();
//      })
//  }else if (req.url === '/js/filterfunctions.js') {
//     /*  res.writeHead(200, {'content-type': 'text/css'}) */
//      fs.readFile('project/js/filterfunctions.js', 'utf-8', (error, data) => {
//          res.write(data);
//          res.end();
//      })
//  } else if (req.url === '/js/renderfunctions.js') {
//     /*  res.writeHead(200, {'content-type': 'text/css'}) */
//      fs.readFile('project/js/renderfunctions.js', 'utf-8', (error, data) => {
//          res.write(data);
//          res.end();
//      })
//  }