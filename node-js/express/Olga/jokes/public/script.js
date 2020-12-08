setInterval(() => {

    fetch('/randomJoke')
        .then(response => response.json())
        .then(data => {
            document.getElementById('container').innerHTML = `<h1>${data.joke}</h1>`
            console.log(data.joke)
        })
}, 5000)
