const wordsArray = [
    "faboulus",
    "interactive",
    "gorgeous",
    "spectecular",
    "javascript"
]

const lettersArray = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
]


let splittedWordArray = [];




function randomWordGenerator(){
    const randomNumber = Math.floor(Math.random(wordsArray.length)*wordsArray.length);
    randomWord = wordsArray[randomNumber];
    console.log(randomWord)
    splittedWordArray = randomWord.split("");
    const hiddenLetters = document.getElementById("hiddenLetters");
    splittedWordArray.forEach(letter => {
        hiddenLetters.innerHTML += `<div class=hiddenLetter></div>`
    })
}

function renderLetters(){
    lettersArray.forEach(letter => {
        const lettersArray = document.getElementById("lettersArray");
        lettersArray.innerHTML += `<button class="clickableLetter" onclick="handleClickedLetter(event)">${letter}</button>`
    })
}

function handleClickedLetter(e){
    const clickedLetter = e.target.innerHTML;
    const letterIndexes = [];
    for(var index = randomWord.indexOf(clickedLetter);index>=0;index= randomWord.indexOf(clickedLetter,index+1)){
        letterIndexes.push(index);
        console.log(letterIndexes)
    }
    letterIndexes.forEach(index => {
        const hiddenLetters = document.getElementById("hiddenLetters");
        hiddenLetters.children[index].innerHTML = clickedLetter;
        hiddenLetters.children[index].setAttribute("class","showLetter")
    })  
    
}








