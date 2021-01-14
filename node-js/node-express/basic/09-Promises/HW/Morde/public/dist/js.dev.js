"use strict";

function handleSubmit(e) {
  e.preventDefault();
  var team = e.target.children.team.value;
  var teamImg = document.getElementById("teamImg").innerHTML = "<div><img class='teamPic' src=img/" + team + ".png alt=/></div>";
  fetch("/send-team-name", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      team: team
    })
  }).then(function _callee(res) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(res.json());

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  }).then(function (data) {
    var nameArray = data.playersNameList.split(",");
    nameArray.forEach(function (name) {
      document.getElementById("names").innerHTML += "<div class='divStyle'>" + name + "</div>";
    });
    var positionArray = data.playersPositionList.split(",");
    positionArray.forEach(function (position) {
      document.getElementById("positions").innerHTML += "<div class='divStyle'>" + position + "</div>";
    });
    var numbersArray = data.playersNumberList.split(",");
    numbersArray.forEach(function (number) {
      document.getElementById("numbers").innerHTML += "<div class='divStyle'>" + number + "</div>";
    });
    var countryArray = data.playersCountryList.split(",");
    countryArray.forEach(function (country) {
      document.getElementById("countries").innerHTML += "<div class='divStyle'>" + country + "</div>";
    });
  });
}