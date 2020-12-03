const http = require("http")
const fs = require("fs")

http.createServer((req, res) => {

    if (req.url === "/") {
        fs.readFile("index.html", 'utf-8', (err, data) => {
            res.writeHead(200, {
                "content-type": "text/html"
            })
            res.write(data);
            res.end();
        })
    } else if (req.url === "/style.css") {
        fs.readFile("style.css", 'utf-8', (err, data) => {
            res.writeHead(200, {
                "content-type": "text/css"
            })


            res.write(data);
            res.end();
        })
    } 
 
     else {
        fs.readFile("404page.html", 'utf-8', (err, data) => {
            res.writeHead(404, {
                "content-type": "text/html"
            })
            res.write(data);
            res.end();
        })


    }
}).listen(8083, () => {
    console.log('server  on port 8080')
});