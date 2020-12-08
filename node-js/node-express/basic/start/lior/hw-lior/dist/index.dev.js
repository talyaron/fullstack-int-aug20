"use strict";

var express = require('express');

var app = express();
app.use(express["static"]('public'));
app.use(function (req, res, next) {
  console.log("someone called the server: ".concat(req.url, " "));
  next();
});
var jokes = ['Chuck Norris doesn’t read books. He stares them down until he gets the information he wants.', 'Time waits for no man. Unless that man is Chuck Norris.', 'If you spell Chuck Norris in Scrabble, you win. Forever.', 'Chuck Norris breathes air … five times a day.', 'In the Beginning there was nothing … then Chuck Norris roundhouse kicked nothing and told it to get a job.', 'When God said, “Let there be light!” Chuck said, “Say Please.”', 'Chuck Norris has a mug of nails instead of coffee in the morning.', 'Chuck Norris’ tears cure cancer. Too bad he has never cried.'];
app.get('/get-jokes', function (req, res) {
  var random = Math.floor(Math.random() * jokes.length);
  var randomJoke = jokes[random];
  console.log(randomJoke);
  res.send({
    randomJoke: randomJoke
  });
});
var port = 3000;
app.listen(port, function () {
  console.log('server is lisining', port);
});