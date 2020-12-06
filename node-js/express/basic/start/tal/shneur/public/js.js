setInterval(() => {

    fetch('/timeSinceRefresh')
        .then(response => response.json())
        .then(data => {
            document.getElementById('box').innerHTML = `<h1>you have loged to this website ${data.timeSinceRefresh} seconds ago</h1>`
        })
}, 1000)