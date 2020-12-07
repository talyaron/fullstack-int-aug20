

setInterval(() => {

    fetch('/get-jokes')
        .then(response => response.json())
        .then(data => {
            document.getElementById('root').innerText = `${data.randomJoke}`
        })
},1000)