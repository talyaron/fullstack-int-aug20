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

let counter = 0

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
    const letterClicked = e.target;
    const regExp = new RegExp(clickedLetter,"g");
    if(regExp.test(splittedWordArray)){
        const letterIndexes = [];
    for(var index = randomWord.indexOf(clickedLetter);index>=0;index= randomWord.indexOf(clickedLetter,index+1)){
        letterIndexes.push(index);
    }
    letterIndexes.forEach(index => {
        const hiddenLetters = document.getElementById("hiddenLetters");
        hiddenLetters.children[index].innerHTML = clickedLetter;
        hiddenLetters.children[index].setAttribute("class","showLetter")
        letterClicked.setAttribute("style","background-color:green");
        letterClicked.style.pointerEvents = "none"
    })
    }else{
        letterClicked.setAttribute("style","background-color:red")
        letterClicked.style.pointerEvents = "none"
        const coverPic = document.getElementById("coverPic1");
        coverPic.children[counter].setAttribute("style","display:none")
        counter ++;
        if(counter >= 5){
            Swal.fire({
                icon:'error',
                title: 'Sorry, 5 mistakes and you are out!',
                text:'Refresh to play again!'
            })
        }
    } 

    const x = document.querySelectorAll('.showLetter').length;
    const y = splittedWordArray.length;
    if(x == y){
        Swal.fire({
            icon:'success',
            title:'Congratulations!',
            text:'Think you are good? Refresh to try another word'
        })
    }


}










