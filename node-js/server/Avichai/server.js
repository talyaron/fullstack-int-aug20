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
  } else if (req.url === '/dist/style.css') {

    fs.readFile('dist/style.css', 'utf-8', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/css' })
      res.write(data);
      res.end();
    })

  } else if (req.url === '/js.js') {
    fs.readFile('js.js', 'utf-8', (err, data) => {

      res.writeHead(200, { 'Content-Type': 'text/javascript' })
      res.write(data);
      res.end();
    })
  }  else if (req.url === '/img/6.jpeg') {
    const img = fs.readFileSync('img/6.jpeg')
    res.writeHead(200, { 'Content-Type': 'image/jpeg' })
    res.end(img, 'binary');
  }
  else if (req.url === '/img/5.jpeg') {
    const img = fs.readFileSync('img/5.jpeg')
    res.writeHead(200, { 'Content-Type': 'image/jpeg' })
    res.end(img, 'binary');
  }
  else if (req.url === '/img/4.jpeg') {
    const img = fs.readFileSync('img/4.jpeg')
    res.writeHead(200, { 'Content-Type': 'image/jpeg' })
    res.end(img, 'binary');
  }
  else if (req.url === '/img/3.jpeg') {
    const img = fs.readFileSync('img/3.jpeg')
    res.writeHead(200, { 'Content-Type': 'image/jpeg' })
    res.end(img, 'binary');
  }
  else if (req.url === '/img/2.jpeg') {
    const img = fs.readFileSync('img/2.jpeg')
    res.writeHead(200, { 'Content-Type': 'image/jpeg' })
    res.end(img, 'binary');
  }
  else if (req.url === '/img/1.jpeg') {
    const img = fs.readFileSync('img/1.jpeg')
    res.writeHead(200, { 'Content-Type': 'image/jpeg' })
    res.end(img, 'binary');
  }
  else if (req.url === '/img/0.jpeg') {
    const img = fs.readFileSync('img/0.jpeg')
    res.writeHead(200, { 'Content-Type': 'image/jpeg' })
    res.end(img, 'binary');
  }
  else {
    fs.readFile('404.html', 'utf-8', (err, data) => {
      res.writeHead(404, { 'Content-Type': 'text/html' })
      res.write(data);
      res.end();
    })
  }
}).listen(8080, () => {
  console.log("on listen 8080")
}); 