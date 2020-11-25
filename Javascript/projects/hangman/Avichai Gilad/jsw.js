const words = ["helo test", "test", "subject", "something", "random", "bla blues"]

let clickedLetter = ""
let strikes = 3
let counter = 0
let root = document.querySelector("#root")
let html = ""

let random = Math.floor(Math.random() * 6);
let word = words[random]
console.log(word)

function newGame() {
    word = words[random]
    console.log(word)
    strikes = 3

    for (i = 1; i < 27; i++) {
        document.querySelector(`#button${i}`).style.display = "inline"
    }
    createArray()
    document.querySelector("#newGame").style.display = "none"
    html = ""

    // arr.forEach(e => {
    //     html2 += `${e}`
    // })
    // root.innerHTML = html2

    for (i = 0; i < word.length; i++) {
        if (word.charAt(i) != " ") {
            html += "_"
        } else {
            html += "-"
        }
    }
    root.innerHTML = html
}


function createArray() {
    let clickedLetterArray = []

    for (i = 0; i < word.length; i++) {
        if (word.charAt(i) != " ") {
            clickedLetterArray.push("_")
        } else {
            clickedLetterArray.push("-")
        }
    }
    console.log(clickedLetterArray)
    return clickedLetterArray
}

function handleLetterClick(e) {
    let arr = createArray()
    // get letter clicked
    clickedLetter = e.target.dataset.letter
    console.log(clickedLetter)

    const letterCheck = new RegExp(clickedLetter, 'gi')

    for (i = 0; i < arr.length; i++) {
        if (letterCheck.test(word.charAt(i))) {
            console.log("found")
            arr.splice(i, 1, `${clickedLetter}`)
        } else {
            counter++
        }
    }
    console.log(arr)
    html = ""
    arr.forEach(e => {
        html += `${e}`
    })

    root.innerHTML = html



    if (counter == arr.length) {
        strikes--
        counter = 0
    } else {
        counter = 0
    }
    if (strikes == 0) {
        root.innerHTML = "Gaameee over! Loser"
        for (i = 1; i < 27; i++) {
            document.querySelector(`#button${i}`).style.display = "none"
        }
        document.querySelector("#newGame").style.display = "inline"

    }
}

