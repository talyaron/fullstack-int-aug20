const { response } = require("express");


fetch('get-number-of-dogs')
.then(response => response.json())
.then(data =>{
    document.getElementById('root').innerText = ''
})