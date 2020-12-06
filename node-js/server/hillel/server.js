const http = require('http');
const fs = require('fs')


http.createServer((req, res) => {
    console.log(req.url)

   
    console.log(req.url.split('/')[1].split('.')[1])

    if (req.url === '/') {
        console.log('main')
        fs.readFile('WhatsApp.html', 'utf-8', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end();
        })
    }

   

    else if (req.url.split('/')[1].split('.')[1] === 'css') {
        console.log(req.url.split('/')[1])
        fs.readFile(req.url.split('/')[1], 'utf-8', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/css'})
            res.write(data)
            res.end();
        })
    }

    else if (req.url.split('/')[1].split('.')[1] === 'js') {
        fs.readFile(req.url.split('/')[1], 'utf-8', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/javascript'})
            res.write(data)
            res.end();
        })
    }
})

    .listen(8080, () => {
        console.log('server listen on port 8080')
    })
