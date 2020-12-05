"use strict";

var jokes = ['Chuck Norris doesn’t read books. He stares them down until he gets the information he wants.', 'Time waits for no man. Unless that man is Chuck Norris.', 'If you spell Chuck Norris in Scrabble, you win. Forever.', 'Chuck Norris breathes air … five times a day.', 'In the Beginning there was nothing … then Chuck Norris roundhouse kicked nothing and told it to get a job.', 'When God said, “Let there be light!” Chuck said, “Say Please.”', 'Chuck Norris has a mug of nails instead of coffee in the morning.', 'Chuck Norris’ tears cure cancer. Too bad he has never cried.'];
var random = Math.floor(Math.random() * jokes.length);
var randomJoke = jokes[random];
console.log(randomJoke);
setInterval(function () {
  fetch('/get-jokes').then(function (response) {
    return response.json();
  }).then(function (data) {
    document.getElementById('root').innerText = "".concat(randomJoke);
  });
});