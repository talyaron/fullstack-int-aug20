
setInterval(() => {

    fetch('/getjock')
        .then(response => response.json())
        .then(data => {
            document.getElementById('root').innerHTML = `${data.randjock}`
            console.log(data);
        })
}, 5000)