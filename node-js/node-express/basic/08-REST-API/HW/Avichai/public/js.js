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
            if(data.ok === false){
                console.log('nothing found')
            }else{
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
            if (i === 0) {
                html += `<div class="row d-flex justify-content-around">
                <div class="card" style="width: 13rem;">
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
            } else if (i === 5) {
                html += `</div><div class="row d-flex justify-content-around mt-2">
                <div class="card" style="width: 13rem;">
                    <img class="card-img-top" style="height: 16.2rem;"
                        src="${movie.Poster}"
                        alt="Card image cap">
                    <div class="card-body d-flex flex-column justify-content-center h-50">
                        <h6 class="card-title">${movie.Title} (${movie.Year})</h6>
                        <h6 class="card-text">${type}</h6>
                        </div>
                        <a href="https://www.imdb.com/title/${movie.imdbID}/" class="btn btn-primary btn-sm position-relative" style="width:75%;bottom:0.6rem;margin:auto auto auto auto">IMBd
                        page</a>
                </div>`
            } else if (i === 10) {
                html += `</div><div class="row d-flex justify-content-around mt-2">
                <div class="card" style="width: 13rem;">
                    <img class="card-img-top" style="height: 16.2rem;"
                        src="${movie.Poster}"
                        alt="Card image cap">
                    <div class="card-body d-flex flex-column justify-content-center h-50">
                        <h6 class="card-title">${movie.Title} (${movie.Year})</h6>
                        <h6 class="card-text">${type}</h6>
                        </div>
                        <a href="https://www.imdb.com/title/${movie.imdbID}/" class="btn btn-primary btn-sm position-relative" style="width:75%;bottom:0.6rem;margin:auto auto auto auto">IMBd
                        page</a>
                </div>`
            } else {
                html += `<div class="card" style="width: 13rem;">
                <img class="card-img-top" style="height: 16.2rem;"
                    src="${movie.Poster}"
                    alt="Card image cap">
                <div class="card-body d-flex flex-column justify-content-center ">
                    <h6 class="card-title">${movie.Title} (${movie.Year})</h6>
                    <h6 class="card-text">${type}</h6>
                    </div>
                    <a href="https://www.imdb.com/title/${movie.imdbID}/" class="btn btn-primary btn-sm position-relative" style="width:75%;bottom:0.6rem;margin:auto auto auto auto">IMBd
                        page</a>
                       
               
            </div>`
            }
            console.log(i)
            console.log(movies[i])
            i++
        }
    })
    let movieBox = document.querySelector('.moviesBox')
    movieBox.innerHTML = html
}
