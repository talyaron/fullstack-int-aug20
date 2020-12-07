setInterval(() => {

    fetch('/get-new-joke').then(response => response.json().then(jokes => {
        document.getElementById('joke').innerText = `${jokes.chosenJoke.joke}`
        document.getElementById('answer').innerText = `${jokes.chosenJoke.answer}`
    }))

}, 5000)
