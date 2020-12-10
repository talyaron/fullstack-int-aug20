fetch('/get-joke')
        .then(response => response.json())
        .then(data => {
            document.getElementById('root').innerText =  data.joke
        })
setInterval(() => {

    fetch('/get-joke')
        .then(response => response.json())
        .then(data => {
            document.getElementById('root').innerText =  data.joke
        })
}, 5000
)