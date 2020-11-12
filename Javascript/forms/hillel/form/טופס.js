// function buttonn3() {
//     event.preventDefault();
//     document.html.style.fontSize = "25px"
// }

function savecolor() {
    event.preventDefault();
    const color = event.target.children.color.value
    card.style.backgroundColor = color

}

function buttonn1() {
    event.preventDefault();
    // card.style.backgroundColor = 'rgba(255, 183, 183, 0.335)'
    // card.style.boxShadow = 'none'
    none.style.display = 'block'
    block.style.display = 'none'
    boxcard.style.color = 'black'
    boxcard.style.backgroundImage = " url(img/כוכבים.jpg)"

}

function buttonn2() {
    event.preventDefault();
    // box.style.backgroundColor = "rgb(255, 213, 213)"
    card.style.boxShadow =
        "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3)"
    none.style.display = 'none'
    block.style.display = 'block'
    boxcard.style.color = 'rgb(126, 126, 126)'
    boxcard.style.backgroundImage = "url(img/רקע.jpg)"
}



const myname = 'hillel'
const myfamily = 'arouas'
const myid = 123456789
const myDate_of_birth = 11 / 11 / 1111
const myMobile_Phone = 12345
const mypassword = "javascript"

function saveinformation(event) {
    event.preventDefault();
    const password = event.target.children.password.value;

    // היית צריך לבדוק שגם שם המתשמש מתאים
    if (password == mypassword) {
        alert("הסיסמה נכונה ☻")
    } else {
        alert("סיסמה שגויה נסה שנית")
    }
}