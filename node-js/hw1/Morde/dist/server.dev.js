"use strict";

var express = require('express');

var app = express();
var jokesArray = ["Why do we tell actors to \"break a leg?\"\nBecause every play has a cast.", "Helvetica and Times New Roman walk into a bar.\n\u201CGet out of here!\u201D shouts the bartender. We don\u2019t serve your type.", "Yesterday I saw a guy spill all his Scrabble letters on the road. I asked him, \u201CWhat\u2019s the word on the street?\u201D", "Hear about the new restaurant called Karma?\nThere\u2019s no menu: You get what you deserve.", "Did you hear about the actor who fell through the floorboards?\nHe was just going through a stage.", "Did you hear about the claustrophobic astronaut?\nHe just needed a little space.", "Why don\u2019t scientists trust atoms?\nBecause they make up everything.", "How do you drown a hipster?\nThrow him in the mainstream.", "Why can\u2019t you explain puns to kleptomaniacs?\nThey always take things literally.", "A man tells his doctor, \u201CDoc, help me. I\u2019m addicted to Twitter!\u201D\nThe doctor replies, \u201CSorry, I don\u2019t follow you \u2026\u201D"];
app.use(express["static"]('public'));
app.get('/getjokes', function (req, res) {
  res.send({
    jokesArray: jokesArray
  });
});
var port = 3000;
app.listen(port, function () {
  console.log('server listen on port', port);
});