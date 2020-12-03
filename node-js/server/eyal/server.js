/*
 const http = require('http');

http.createServer((req, res) => {
    res.write('<h1>Hello World!</h1><p>testing 123</p>');
    res.end(); 
}).listen(8080,()=>{
    console.log('server listen on port 8080')
});
 */


const http = require('http');
const fs = require('fs');
        
function load(path, type, req, res) {
    /* 'project/index.html' */
    let typeText;
    switch (type) {

        case 'css':
            typeText = `{'content-type': 'text/css'}`;
            break;

        case 'html':
            typeText = `{'content-type': 'text/html'}`;
            break;

        case 'js':
            typeText = "{'content-type': 'text/javascript'}";
            break;

        case 'png' || 'ico':
            typeText = `{'content-type': 'image/ico'}`;
            break;

        default:
            typeText = "";
    }
    if (type != "png") {
        fs.readFile(path, 'utf-8', (error, data) => {
            res.writeHead(200, typeText)
            res.write(data);
            res.end();
        })
    }else if (type === "png" || "ico") {
        const img = fs.readFileSync(path);
        res.writeHead(200, typeText)
        res.end(img, 'binary');
    }
}

function getSuffix(url) {
    var fileExtension = url.split('.').pop();
    return fileExtension;
}

http.createServer((req, res) => {
    /* console.log(req.url) */
    let url = req.url;
    let Suffix = getSuffix(url);
    let fileName = url.split('\\').pop().split('/').pop();
    if (req.url === '/') {

        fs.readFile('project/index.html', 'utf-8', (error, data) => {
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write(data);
            res.end();
        })
    } else load(`project${url}`, Suffix, req, res)



    console.log(`project${url}`, Suffix);
   


}).listen(8080, () => {
    console.log('server listen on port 8080')
});
