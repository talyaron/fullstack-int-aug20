// alert('I am here')


setInterval(() => {

    fetch('/get-number-of-dogs')
        .then(response => response.json())
        .then(data => {
            document.getElementById('root').innerText = `I have ${data.numberOfDogs} dogs`
        })
}, 5000)

