"use strict";

var express = require("express");

var bodyParser = require("body-parser");

var https = require("https");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express["static"]("public"));
app.post("/send-team-name", function (req, res) {
  var team = req.body.team;

  if (team == "") {
    res.redirect("/");
  } else {
    var urlPlayers = "https://data.nba.net/json/cms/noseason/team/" + team + "/roster.json";

    try {
      https.get(urlPlayers, function (response) {
        response.on("data", function _callee(data) {
          var dataParse, playersNameList, playersPositionList, playersNumberList, playersCountryList, playerNameArray, playerPositionArray, playerNumberArray, playerCountryArray;
          return regeneratorRuntime.async(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return regeneratorRuntime.awrap(JSON.parse(data));

                case 2:
                  dataParse = _context.sent;
                  playersNameList = "";
                  playersPositionList = "";
                  playersNumberList = "";
                  playersCountryList = "";
                  playerNameArray = dataParse.sports_content.roster.players.player;
                  playerNameArray.forEach(function (player) {
                    playersNameList += player.first_name + ",";
                  });
                  playerPositionArray = dataParse.sports_content.roster.players.player;
                  playerPositionArray.forEach(function (player) {
                    playersPositionList += player.position_full + ",";
                  });
                  playerNumberArray = dataParse.sports_content.roster.players.player;
                  playerNumberArray.forEach(function (player) {
                    playersNumberList += player.jersey_number + ",";
                  });
                  playerCountryArray = dataParse.sports_content.roster.players.player;
                  playerCountryArray.forEach(function (player) {
                    playersCountryList += player.elias_country + ",";
                  });
                  res.send({
                    playersNameList: playersNameList,
                    playersPositionList: playersPositionList,
                    playersNumberList: playersNumberList,
                    playersCountryList: playersCountryList
                  });

                case 16:
                case "end":
                  return _context.stop();
              }
            }
          });
        });
      });
    } catch (e) {
      console.log(e);
      res.redirect("/");
    }
  }
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("server listen on port", port);
});