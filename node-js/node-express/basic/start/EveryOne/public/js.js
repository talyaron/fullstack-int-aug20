setInterval(() => {

    fetch('/get-time')
        .then(response => response.json())
        .then(data => {
            document.getElementById('root').innerText = `The time is ${data.n}`
        })
}, 100)