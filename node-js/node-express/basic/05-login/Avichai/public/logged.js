function getUsername(e) {
    fetch('/get-username')
        .then(r => r.json())
        .then(data => {
            document.getElementById('root').innerHTML = `Hello ${data.savedUsername}, Welcome to special area`
        })
}

setInterval(function () {
    fetch('/check-valid')
        .then(r => r.json())
        .then(data => {
            if (data.validate) {
                console.log('ur good')
            } else {
                window.location.replace('index.html')
            }
        })
}, 3000);