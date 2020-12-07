setInterval(() => {

    fetch('/get-joke')
        .then(response => response.json())
        .then(data => {
            document.querySelector('.root').innerHTML = `<h1> ${data.joke}</h1> `
        })
}, 10000)