const http = require('http');
const fs = require('fs');
const { RSA_NO_PADDING } = require('constants');


http.createServer((req, res) => {
  console.log(req.url)

  if (req.url === '/') {
    fs.readFile('index.html', 'utf-8', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data);
      res.end();
    })
  } else if (req.url === '/style.css') {

    fs.readFile('style.css', 'utf-8', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/css' })
      res.write(data);
      res.end();
    })

  } else if (req.url === '/script.js') {
    fs.readFile('script.js', 'utf-8', (err, data) => {

      res.writeHead(200, { 'Content-Type': 'text/javascript' })
      res.write(data);
      res.end();
    })
  }  else if (req.url === '/img/bg.jpg') {
    const img = fs.readFileSync('/img/bg.jpg')
    res.writeHead(200, { 'Content-Type': 'image/jpeg' })
    res.end(img, 'binary');
  }else if (req.url === '/img/0.png') {
    const img = fs.readFileSync('/img/0.png')
    res.writeHead(200, { 'Content-Type': 'image/png' })
    res.end(img, 'binary');
  }
  else if (req.url === '/img/1.png') {
    const img = fs.readFileSync('/img/1.png')
    res.writeHead(200, { 'Content-Type': 'image/png' })
    res.end(img, 'binary');no
  }
  else if (req.url === '/img/2.png') {
    const img = fs.readFileSync('/img/2.png')
    res.writeHead(200, { 'Content-Type': 'image/png' })
    res.end(img, 'binary');
  }
  else if (req.url === '/img/3.png') {
    const img = fs.readFileSync('/img/3.png')
    res.writeHead(200, { 'Content-Type': 'image/png' })
    res.end(img, 'binary');
  }
  else if (req.url === '/img/4.png') {
    const img = fs.readFileSync('/img/4.png')
    res.writeHead(200, { 'Content-Type': 'image/png' })
    res.end(img, 'binary');
  }
  else if (req.url === '/img/5.png') {
    const img = fs.readFileSync('/img/5.png')
    res.writeHead(200, { 'Content-Type': 'image/png' })
    res.end(img, 'binary');
  }
  else if (req.url === '/img/6.png') {
    const img = fs.readFileSync('/img/6.png')
    res.writeHead(200, { 'Content-Type': 'image/png' })
    res.end(img, 'binary');
  }
  else {
    fs.readFile('404.html', 'utf-8', (err, data) => {
      res.writeHead(404, { 'Content-Type': 'text/html' })
      res.write(data);
      res.end();
    })
  }
}).listen(3001, () => {
  console.log("on listen 3001")
}); 