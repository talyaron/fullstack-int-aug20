"use strict";

function handleSendMovie(e) {
  e.preventDefault();
  var movie = e.target.children.movie.value;
  fetch('/getMovieList', {
    method: 'POST',
    // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      movie: movie
    })
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    if (data.ok === false) {
      console.log('nothing found');
      var movieBox = document.querySelector('.moviesBox');
      movieBox.innerHTML = "<div class=\"notFound\">Sorry no match with these characters</div>";
    } else {
      var movies = data.movies;
      writeMovieToDom(movies);
      console.log(movies);
    }
  });
}

function writeMovieToDom(movies) {
  html = '';
  i = 0;
  var type;
  movies.forEach(function (movie) {
    if (movie.Type === 'movie') {
      type = 'Movie';
    } else if (movie.Type === 'series') {
      type = 'Series';
    }

    if (movie.Type === 'movie' || movie.Type === 'series') {
      html += "\n                <div class=\"card mt-2\" style=\"width: 13.6rem;\">\n                    <img class=\"card-img-top\" style=\"height: 16.2rem;\"\n                        src=\"".concat(movie.Poster, "\"\n                        alt=\"Card image cap\">\n                    <div class=\"card-body d-flex flex-column justify-content-center mt-2 h-50\">\n                        <h6 class=\"card-title\">").concat(movie.Title, " (").concat(movie.Year, ")</h6>\n                        <h6 class=\"card-text\">").concat(type, "</h6>\n                        </div>\n                        <a href=\"https://www.imdb.com/title/").concat(movie.imdbID, "/\" class=\"btn btn-primary btn-sm position-relative\" style=\"width:75%;bottom:0.6rem;margin:auto auto auto auto\">IMBd\n                        page</a>\n                </div>");
    }
  });
  var movieBox = document.querySelector('.moviesBox');
  movieBox.innerHTML = html;
}