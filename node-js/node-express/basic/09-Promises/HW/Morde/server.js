const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.post("/send-team-name", (req, res) => {
  const { team } = req.body;
  if (team == "") {
    res.redirect("/");
  } else {
    const urlPlayers =
      "https://data.nba.net/json/cms/noseason/team/" + team + "/roster.json";

    try {
      https.get(urlPlayers, function (response) {
        response.on("data", async function (data) {
          const dataParse = await JSON.parse(data);
          let playersNameList = "";
          let playersPositionList = "";
          let playersNumberList = "";
          let playersCountryList = "";

          const playerNameArray =
            dataParse.sports_content.roster.players.player;
          playerNameArray.forEach((player) => {
            playersNameList += player.first_name + ",";
          });
          const playerPositionArray =
            dataParse.sports_content.roster.players.player;
          playerPositionArray.forEach((player) => {
            playersPositionList += player.position_full + ",";
          });
          const playerNumberArray =
            dataParse.sports_content.roster.players.player;
          playerNumberArray.forEach((player) => {
            playersNumberList += player.jersey_number + ",";
          });
          const playerCountryArray =
            dataParse.sports_content.roster.players.player;
          playerCountryArray.forEach((player) => {
            playersCountryList += player.elias_country + ",";
          });

          res.send({
            playersNameList,
            playersPositionList,
            playersNumberList,
            playersCountryList,
          });
        });
      });
    } catch (e) {
      console.log(e);
      res.redirect("/");
    }
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server listen on port", port);
});
