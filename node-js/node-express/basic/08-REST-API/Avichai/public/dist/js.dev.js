"use strict";

function handleSendCity(e) {
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
    var movies = data.x;
    writeButtonsDom(movies);
    console.log(movies);
  });
}

function handleMovieClick(e) {
  var movieName = e.target.dataset.td;
  fetch('/getMovieInfo', {
    method: 'POST',
    // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      movieName: movieName
    })
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    var movies = data.x;
    console.log(movies);
    writeMovieToDom(movies);
  });
}

function writeButtonsDom(movies) {
  html = '';
  movies.forEach(function (movie) {
    html += "<button id=\"movieName\" data-td=\"".concat(movie.Title, "\" onclick=\"handleMovieClick(event)\">").concat(movie.Title, "</button>");
  });
  document.getElementById('root').innerHTML = html;
}

function writeMovieToDom(movies) {
  html = '';
  movies.forEach(function (movie) {
    html += "<div id=\"movie\" data-td=\"".concat(movie.Title, "\">\n        <div class=\"movie__text\"> Movie Title: ").concat(movie.Title, " <br> Public Year: ").concat(movie.Year, "\n        <br>\n            <a href=\"https://www.imdb.com/title/").concat(movie.imdbID, "/\">Click here for more info</a>\n        </div>\n        <img\n            src=\"").concat(movie.Poster, "\">\n    </div>");
    console.log(movie.Title);
    console.log(movie.imdbID);
  });
  document.getElementById('moviesBox').innerHTML = html;
}