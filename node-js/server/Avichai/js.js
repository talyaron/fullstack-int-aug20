const words = ["helo", "work pls", "testing", "helo twice", "yelo"]
const lettersArray = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
const root = document.querySelector("#root")
const lettersDom = document.getElementById("letters")
const strikesDom = document.getElementById("strikes")
let chosenWordArray = []
let strikes = 6
let counter = 0

function handleNewGame() {
    const random = Math.floor(Math.random() * words.length);
    chosenWord = words[random]

    strikes = 6
    strikesDom.innerHTML = `You have ${strikes} strikes left`

    document.getElementById("hangman").innerHTML = `<img src="img/6.jpeg">`

    let html = ""
    console.log(chosenWord)
    document.getElementById("newGame").style.display = "none"
    chosenWordArray = []

    for (i = 0; i < chosenWord.length; i++) {
        if (chosenWord.charAt(i) != " ") {
            chosenWordArray.push("_")
        } else {
            chosenWordArray.push("-")
        }
    }
    chosenWordArray.forEach(letter => {
        html += ` ${letter} `
    })

    root.innerHTML = html
    console.log(chosenWordArray)
}

function renderLetters() {
    lettersDom.innerHTML = ""
    lettersArray.forEach(letter => {
        lettersDom.innerHTML += `<button id="buttonLetter" data-letter="${letter}" onclick="handleLetterClick(event)" style="grid-area: ${letter}">${letter}</button>`
    })
}

function handleLetterClick(e) {
    const clickedLetter = e.target.dataset.letter
    console.log(clickedLetter)
    const regLetter = new RegExp(clickedLetter, 'gi')
    root.innerHTML = ""
    html = ""
    e.target.style.backgroundColor = "red"
    e.target.style.pointerEvents = "none"
    for (i = 0; i < chosenWordArray.length; i++) {
        if (regLetter.test(chosenWord.charAt(i))) {
            console.log("found")
            chosenWordArray.splice(i, 1, `${clickedLetter}`)
        } else {
            counter++
        }
    }
    chosenWordArray.forEach(letter => {
        html += ` ${letter} `
    })
    root.innerHTML = html


    if (counter == chosenWordArray.length) {
        strikes--
        strikesDom.innerHTML = `You have ${strikes} strikes left`
        document.getElementById("hangman").innerHTML = `<img src="img/${strikes}.jpeg">`
    }
    counter = 0

    if (strikes == 0) {
        lettersDom.innerHTML = ""
        root.innerHTML = "You Lost"
        strikesDom.innerHTML = ""
        document.getElementById("newGame").style.display = "block"
    }
    let victoryCondition = chosenWordArray.length
    chosenWordArray.forEach(letter => {
        if (letter != "_") {
            victoryCondition--
        }
    })
    if (victoryCondition == 0) {
        lettersDom.innerHTML = ""
        root.innerHTML = "You won"
        document.getElementById("newGame").style.display = "block"
        console.log("you won")
    }
}