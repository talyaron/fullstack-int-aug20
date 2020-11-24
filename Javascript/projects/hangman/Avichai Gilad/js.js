const words = "hello test"

let clickedLetter = ""
let strikes = 3
let counter = 0
let root = document.querySelector("#root")

function createArray() {
    let clickedLetterArray = []
    for (i = 0; i < words.length; i++) {
        if (words.charAt(i) != " ") {
            clickedLetterArray.push(" _ ")
        } else {
            clickedLetterArray.push("-")
        }
    }
    return clickedLetterArray
}
let arr = createArray()

function handleLetterClick(e) {

    // get letter clicked
    clickedLetter = e.target.dataset.letter
    console.log(clickedLetter)

    const letterCheck = new RegExp(clickedLetter, 'gi')

    for (i = 0; i < arr.length; i++) {
        if (letterCheck.test(words.charAt(i))) {
            console.log("found")
            arr.splice(i, 1, `${clickedLetter}`)
        } else {
            counter++
        }
    }
    let html = ""
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
        document.querySelector("#newGame").style.display = "block"

    }
}
function newGame() {
    strikes = 3
    for (i = 1; i < 27; i++) {
        document.querySelector(`#button${i}`).style.display = "inline"
    }
    createArray()
    root.innerHTML = `${arr}`
}
