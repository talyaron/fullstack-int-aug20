fetch('/getjokes')
    .then(response => response.json())
    .then(data => {
        data.jokesArray.forEach((joke, i) => {
            setTimeout(() => {
                document.getElementById("root").innerHTML = `<div class="createdDiv">${joke}</div>`
            }, i * 10000);
        })
    });

