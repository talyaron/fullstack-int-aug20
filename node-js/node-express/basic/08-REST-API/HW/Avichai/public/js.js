function handleSendMovie(e) {
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
            if (data.ok === false) {
                console.log('nothing found')
                let movieBox = document.querySelector('.moviesBox')
                movieBox.innerHTML = `<div class="notFound">Sorry no match with these characters</div>`
            } else {
                let movies = data.movies
                writeMovieToDom(movies)
                console.log(movies)
            }
        })
}



function writeMovieToDom(movies) {
    html = ''
    i = 0
    let type
    movies.forEach(movie => {

        if (movie.Type === 'movie') {
            type = 'Movie'
        } else if (movie.Type === 'series') {
            type = 'Series'
        }

        if (movie.Type === 'movie' || movie.Type === 'series') {
            html += `
                <div class="card mt-2" style="width: 13.6rem;">
                    <img class="card-img-top" style="height: 16.2rem;"
                        src="${movie.Poster}"
                        alt="Card image cap">
                    <div class="card-body d-flex flex-column justify-content-center mt-2 h-50">
                        <h6 class="card-title">${movie.Title} (${movie.Year})</h6>
                        <h6 class="card-text">${type}</h6>
                        </div>
                        <a href="https://www.imdb.com/title/${movie.imdbID}/" class="btn btn-primary btn-sm position-relative" style="width:75%;bottom:0.6rem;margin:auto auto auto auto">IMBd
                        page</a>
                </div>`
        }
    })
    let movieBox = document.querySelector('.moviesBox')
    movieBox.innerHTML = html
}
