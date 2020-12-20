function getUsername(e) {
  fetch("/get-username")
    .then((r) => r.json())
    .then((data) => {
      document.getElementById(
        "root"
      ).innerHTML = `Hey ${data.savedUsername}, Welcome home.`;
    });
}

setInterval(function () {
  fetch("/check-valid")
    .then((r) => r.json())
    .then((data) => {
      if (data.validate) {
        console.log("validated");
      } else {
        window.location.replace("index.html");
      }
    });
}, 3000);
