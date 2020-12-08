// alert('check')

// const { response } = require("express");
fetch('/get-jokes') //give me 'what wrote here'
    .then(response => response.json()) //after do it to json
    .then(data => { //give the data
        document.getElementById('root').innerText = `${data.ran}` //inner in root in htnl
    })

setInterval(() => {

    fetch('/get-jokes') //give me 'what wrote here'
        .then(response => response.json()) //after do it to json
        .then(data => { //give the data
            document.getElementById('root').innerText = `<p class="one"> ${data.ran}</p>` //inner in root in htnl
        })

}, 2000)