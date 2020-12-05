"use strict";

var http = require('http');

var fs = require('fs');

var count = 1;
http.createServer(function (req, res) {
  try {
    console.log("".concat(count++, ") ").concat(req.url));

    if (req.url === '/') {
      fs.readFile('HW.html', 'utf-8', function (err, data) {
        try {
          if (err) throw err;
          res.writeHead(200, {
            'Content-Type': 'text/html'
          });
          res.write(data);
          res.end();
        } catch (e) {
          console.error('11', e);
        } finally {
          if (err) {
            fs.readFile('500.html', 'utf-8', function (err, data) {
              if (err) throw err;
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
        res.write(data);
        res.end();
      });
    } else if (req.url === '/js.js') {
      fs.readFile('js.js', 'utf-8', function (err, data) {
        if (err) throw err;
        res.writeHead(200, {
          'Content-Type': 'text/javascript'
        });
        res.write(data);
        res.end();
      });
    } else if (req.url === '/img/pole.png') {
      var img = fs.readFileSync('img/pole.png');
      res.writeHead(200, {
        'Content-Type': 'image/ico'
      });
      res.end(img, 'binary');
    } else if (req.url === '/icons/carot.png') {
      var _img = fs.readFileSync('icons/carot.png');

      res.writeHead(200, {
        'Content-Type': 'image/ico'
      });
      res.end(_img, 'binary');
    } else {
      fs.readFile('404.html', 'utf-8', function (err, data) {
        if (err) throw err;
        res.writeHead(404, {
          'Content-Type': 'text/html'
        });
        res.write(data);
        res.end();
      });
    }
  } catch (e) {
    console.log('Error: ' + e);
    fs.readFile('500.html', 'utf-8', function (err, data) {
      if (err) throw err;
      res.writeHead(500, {
        'Content-Type': 'text/html'
      });
      res.write(e);
      res.end();
    });
  } // function reload(done) {
  //     browserSync.reload();
  //     done();
  // }

}).listen(2020, function () {
  console.log('server listen on port 2020');
});