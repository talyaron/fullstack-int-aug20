// alert('hi hi hi')

// const response = require("express");
setInterval(() => {
    fetch('/get-number-of-dogs')
        .then(response => response.json())
        .then(data => {
            document.getElementById('root').innerHTML = `I have ${data.numberOfDogs} dogs`
        })
}, 1000)