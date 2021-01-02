<<<<<<< HEAD
function handleSendCity(e) {
    e.preventDefault();
    const movie = e.target.children.movie.value

    fetch('/getMovieList', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ movie })
    })
        .then(res => res.json())
        .then(data => {

            let movies = data.x
            writeButtonsDom(movies)
            console.log(movies)
        })
}

function handleMovieClick(e) {
    const movieName = e.target.dataset.td

    fetch('/getMovieInfo', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ movieName })
    })
        .then(res => res.json())
        .then(data => {
            let movies = data.x
            console.log(movies)
            writeMovieToDom(movies)
        })
}

function writeButtonsDom(movies) {
    html = ''
    movies.forEach(movie => {
        html += `<button id="movieName" data-td="${movie.Title}" onclick="handleMovieClick(event)">${movie.Title}</button>`
    })
    document.getElementById('root').innerHTML = html
}

function writeMovieToDom(movies) {
    html = ''
    movies.forEach(movie => {
        html += `<div id="movie" data-td="${movie.Title}">
        <div class="movie__text"> Movie Title: ${movie.Title} <br> Public Year: ${movie.Year}
        <br>
            <a href="https://www.imdb.com/title/${movie.imdbID}/">Click here for more info</a>
        </div>
        <img
            src="${movie.Poster}">
    </div>`
        console.log(movie.Title)
        console.log(movie.imdbID)
    })
    document.getElementById('moviesBox').innerHTML = html
}
=======
function handleSendCity(e) {
    e.preventDefault();
    const movie = e.target.children.movie.value

    fetch('/getMovieList', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ movie })
    })
        .then(res => res.json())
        .then(data => {

            let movies = data.x
            writeButtonsDom(movies)
            console.log(movies)
        })
}

function handleMovieClick(e) {
    const movieName = e.target.dataset.td

    fetch('/getMovieInfo', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ movieName })
    })
        .then(res => res.json())
        .then(data => {
            let movies = data.x
            console.log(movies)
            writeMovieToDom(movies)
        })
}

function writeButtonsDom(movies) {
    html = ''
    movies.forEach(movie => {
        html += `<button id="movieName" data-td="${movie.Title}" onclick="handleMovieClick(event)">${movie.Title}</button>`
    })
    document.getElementById('root').innerHTML = html
}

function writeMovieToDom(movies) {
    html = ''
    movies.forEach(movie => {
        html += `<div id="movie" data-td="${movie.Title}">
        <div class="movie__text"> Movie Title: ${movie.Title} <br> Public Year: ${movie.Year}
        <br>
            <a href="https://www.imdb.com/title/${movie.imdbID}/">Click here for more info</a>
        </div>
        <img
            src="${movie.Poster}">
    </div>`
        console.log(movie.Title)
        console.log(movie.imdbID)
    })
    document.getElementById('moviesBox').innerHTML = html
}
>>>>>>> master
