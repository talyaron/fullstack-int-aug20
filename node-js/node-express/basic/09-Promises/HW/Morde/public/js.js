function handleSubmit(e) {
  e.preventDefault();
  const team = e.target.children.team.value;
  const teamImg = (document.getElementById("teamImg").innerHTML =
    "<div><img class='teamPic' src=img/" + team + ".png alt=/></div>");

  fetch("/send-team-name", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ team }),
  })
    .then(async (res) => await res.json())
    .then((data) => {
      const nameArray = data.playersNameList.split(",");
      nameArray.forEach((name) => {
        document.getElementById("names").innerHTML +=
          "<div class='divStyle'>" + name + "</div>";
      });
      const positionArray = data.playersPositionList.split(",");
      positionArray.forEach((position) => {
        document.getElementById("positions").innerHTML +=
          "<div class='divStyle'>" + position + "</div>";
      });

      const numbersArray = data.playersNumberList.split(",");
      numbersArray.forEach((number) => {
        document.getElementById("numbers").innerHTML +=
          "<div class='divStyle'>" + number + "</div>";
      });
      const countryArray = data.playersCountryList.split(",");
      countryArray.forEach((country) => {
        document.getElementById("countries").innerHTML +=
          "<div class='divStyle'>" + country + "</div>";
      });
    });
}
