function getUsername(e) {
    fetch('/get-username')
        .then(r => r.json())
        .then(data => {
            document.getElementById('root').innerHTML = `Hello ${data.savedUsername}, Welcome to special area`
        })
}

function getAllUsers(){
    fetch('/get-all-users')
        .then(r => r.json())
        .then(data => {
            console.log(data)
            if (data.validated) {
                console.log(data.users)
            } else {
                window.location.replace('index.html');
               
            }
          
        })
}

setInterval(function () {
    fetch('/check-valid')
        .then(r => r.json())
        .then(data => {
            if (data.validated) {
                console.log('ur good')
            } else {
                window.location.replace('index.html')
            }
        })
}, 10000);