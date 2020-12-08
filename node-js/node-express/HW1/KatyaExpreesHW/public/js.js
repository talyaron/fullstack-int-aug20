// alert('check')

fetch('/get-jokes') //give me 'what wrote here'
    .then(response => response.json()) //after do it to json
    .then(data => { //give the data
        document.getElementById('root').innerHTML = `<div class="one">${data.ran}</div>` //inner in root in htnl
    })

setInterval(() => {

    fetch('/get-jokes') //give me 'what wrote here'
        .then(response => response.json()) //after do it to json
        .then(data => { //give the data
            document.getElementById('root').innerHTML = `<div class="one">${data.ran}</div>` //inner in root in htnl
        })

}, 7000)