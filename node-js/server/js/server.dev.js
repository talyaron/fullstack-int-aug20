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
      typeText = "{'content-type': 'text/javascript'}";
      break;

    case 'png' || 'ico':
      typeText = "{'content-type': 'image/ico'}";
      break;

    default:
      typeText = "";
  }

  if (type != "png") {
    fs.readFile(path, 'utf-8', function (error, data) {
      res.writeHead(200, typeText);
      res.write(data);
      res.end();
    });
  } else if (type === "png" || "ico") {
    var img = fs.readFileSync(path);
    res.writeHead(200, typeText);
    res.end(img, 'binary');
  }
}

function getSuffix(url) {
  var fileExtension = url.split('.').pop();
  return fileExtension;
}

http.createServer(function (req, res) {
  /* console.log(req.url) */
  var url = req.url;
  var Suffix = getSuffix(url);
  var fileName = url.split('\\').pop().split('/').pop();

  if (req.url === '/') {
    fs.readFile('project/index.html', 'utf-8', function (error, data) {
      res.writeHead(200, {
        'content-type': 'text/html'
      });
      res.write(data);
      res.end();
    });
  } else load("project".concat(url), Suffix, req, res);

  console.log("project".concat(url), Suffix);
}).listen(8080, function () {
  console.log('server listen on port 8080');
});