const http = require("http")
const fs = require("fs")

http.createServer((req, res) => {


    fs.readFile("index.html", 'utf-8',(err, data) => {
        res.write(data);
        res.end();
    })


}).listen(8082, () => {
    console.log(`the server ghbhn nbhbh gyuhbvh  `);
})