/*     const chooseCatagory = document.getElementById("chooseCatagory");
    let category = [];
    for (let i = 0; i < subjects.length; i++){
        for (let l = 0; l < category.length; l++){
            console.log(subjects[i])
            console.log(category[l])
            if (subjects[i] !== category[l]) {
                category.push(subjects[i]);
            }
        }
    }
    console.log(category)
    chooseCatagory.innerHTML += `<button onclick="categorychoose(event)"> ${category} </button> `
 */

let lineEdit = [];
let line = [];
let chooseWord = document.getElementById("chooseWord");
let chosenWordArr = []; // array of characters of the chosen word

let arrOfChars = []; // array of characters of the playerr

function changeDispalyed(word) {
    let chooseWord = document.getElementById("chooseWord");

    chooseWord.innerHTML = word;
}

function theDecision(e) {
    let letters = document.getElementById("letters");
    letters.innerHTML = "";
    changeDispalyed('');
    let arrchosen = [];
    const decision = (e.target.innerText)
    subjects.forEach(element => {
        if (element.category == decision) {
            arrchosen.push(element.name);
        }

    })


    let item = arrchosen[Math.floor(Math.random() * arrchosen.length)];
    chosenWordArr = Array.from(item);
    console.error(chosenWordArr);

    /* handleletter(item) */



    generateLines(item.length);




    const letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

y7
    let html = '';

    letter.forEach(element => {
        html += `<button onclick="handleletter(event)" >${element}</button>`;
    })
    letters.innerHTML += `${html}`


}
let wrong = [];




function handleletter(e) {
    const choiseLetter = e.target.outerText;
    console.log(chosenWordArr);
    console.log(choiseLetter)
    console.log(chosenWordArr[arrOfChars.length ]);

    if (arrOfChars.length < chosenWordArr.length) {
        if (chosenWordArr[arrOfChars.length] == choiseLetter) {
            console.log('correct 1');
            // if the user enter correct char
            arrOfChars.push(choiseLetter);
            changeDispalyed(arrOfChars);
            generateLines(chosenWordArr.substring(arrOfChars.length, chosenWordArr.length));



        } else if (chosenWordArr[arrOfChars.length ] == ' ' && chosenWordArr[arrOfChars.length+1] == choiseLetter) {
            // if "yaara eliav" and now is ' ' (space) and the entered key is 'e' (after the space) 
            console.log('correct 2');
            arrOfChars.push(' ');
            arrOfChars.push(choiseLetter);
            changeDispalyed(arrOfChars);
            generateLines(chosenWordArr.substring(arrOfChars.length, chosenWordArr.length));
        } else {
            console.log('wrong');

            wrong.push(choiseLetter);

            if (wrong.length == 8) {
                const message = document.getElementById("message");
                let gameover = '<p>you lose</p>'
                message.innerHTML += gameover;
            }

        }
    }

    if (arrOfChars.length == chooseWord.length) {
        let winner = '<p>you win</p>'
        message.innerHTML += winner;
        arrOfChars = [];
    }

    // if (arrOfChars.length < chooseWord.length-1) {
    //     if (chooseWord.indexOf(choiseLetter) !== -1) {
    //             // -1 = non exist
    //           // grater than one means the letter appears
    //            arrOfChars.push(choiseLetter);

    //             var correctletter = chosenWord.indexOf(choiseLetter)

    //             lineEdit.charAt(correctletter) == choiseLetter
    //             chooseWord.innerHTML == lineEdit;
    //         }

    //         else {
    //             if (wrong.indexOf(choiseLetter) == -1) {
    //                 if (wrong.length < 8) {
    //                     wrong.push(choiseLetter);

    //                 }

    //                 else {
    //                     const message = document.getElementById("message");
    //                     let gameover = '<p>you lose</p>'
    //                     message.innerHTML += gameover;

    //                 }
    //             }
    //         }





    // }
    // else {
    //     let winner = '<p>you wine</p>'
    //     message.innerHTML += winner;
    //     arrOfChars = [];
    // }
}
/*             if (chosenWord[arrOfChars.length] == choiseLetter) {
                var correctletter = 
                arrOfChars.push(choiseLetter);
 */