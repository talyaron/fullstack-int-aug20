

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

let chosenWord = '';
var newgame = [];
let arrOfChars = [];
let lineEdit = [];
let line = [];
var str = [];
let chooseWord = document.getElementById("chooseWord");
let temp2 = document.getElementById("score");
let score = 9;



    



function theDecision(e) {

    let letters = document.getElementById("letters");
    letters.innerHTML = "";
    chooseWord.innerHTML = "";
    arrOfChars = [];
    let arrchosen = [];
    const decision = (e.target.innerText)

    subjects.forEach(element => {
        if (element.category == decision) {
            arrchosen.push(element.name);
        }
        
    })
    message.innerHTML = "";
    newgame = decision;
   

    
    let item = arrchosen[Math.floor(Math.random() * arrchosen.length)];
    chosenWord = item;
    console.log(chosenWord)

/* handleletter(item) */
    
    generateLines(chosenWord);

/*     let line = [];
    for (let i = 0; i < item.length; i++) {
        if (item[i] !== ' ') {
            line.push( '_  ')
        }
        else {
            line.push('- ')
        }
    }
     str = line.join(' ');

    chooseWord.innerHTML += str;
    lineEdit = str; */

  
    

    const letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


    let html = '';

    letter.forEach(element => {
        html += `<button onclick="handleletter(event)" >${element}</button>`;
    })
    letters.innerHTML += `${html}`


}
let wrong = [];


function handleletter(e) {
    const choiseLetter = e.target.outerText;
    console.log(choiseLetter)

    if (arrOfChars.length < chosenWord.length-1) {
 /*        for (let i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] == choiseLetter) { */
            if (chosenWord.indexOf(choiseLetter) !== -1) {
               arrOfChars.push(choiseLetter);

                let correctletter = chosenWord.indexOf(choiseLetter)
                line[chosenWord.indexOf(choiseLetter)] = choiseLetter;

                console.log(line)
                str = line.join(' ');
 
                chooseWord.innerHTML = str;
     
            }
        
            else {
                if (wrong.indexOf(choiseLetter) == -1) {
                    if (wrong.length < 8) {
                        score -= 1;
                        console.log(score)
                        temp2.innerHTML = score;
                        wrong.push(choiseLetter);
   
                    }

                    else {
                        const message = document.getElementById("message");
                        let gameover = '<p>you lose</p>'
                        message.innerHTML += gameover;
                        theDecision(newgame);
                    }
                }
            }
        

                
        
        
    }
    else {
        let winner = '<p>you wine</p>'
        message.innerHTML += winner;
        arrOfChars = [];
        chooseWord.innerHTML = '';
        theDecision(newgame);

    }
}



function generateLines(item) {

    line = [];
    for (let i = 0; i < item.length; i++) {
        if (item[i] !== ' ') {
            line.push( '_  ')
        }
        else {
            line.push('- ')
        }
    }
    str = line.join(' ');
 
    chooseWord.innerHTML = str;
 

}

/* function editline(editline, correctletter, choiseLetter) {
    let temp = [];
    for (let i = 0; i < chosenWord.length; i++) {
        if (i == correctletter) {
            temp[i].push(choiseLetter)
            console.log(temp[i])
        }
        else {
            temp[i]==( '_  ');
        }
        console.log(temp)
        
    }

        chooseWord.innerHTML == editline; 
    } */
      


/*             if (chosenWord[arrOfChars.length] == choiseLetter) {
                var correctletter = 
                arrOfChars.push(choiseLetter);
 */    
            
        


    

    






