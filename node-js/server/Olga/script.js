var boxWords = [{
  category: "moves",
  word: "tent",
  }, 
  {
  category: "moves",
  word: "wonder",
  }, 
  {
  category: "moves",
  word: "mulan",
  }, 
  {
  category: "moves",
  word: "maleficent",
  }, 
  {
  category: "kids games",
  word: "monopoly",
  }, {
  category: "football",
  word: "messi",
  }, 
  {
  category: "israel",
  word: "jerusalem",
  }, 
  {
  category: "kids games",
  word: "catan",
  }, 
  {
  category: "football",
  word: "ball",
  }, 
  {
  category: "israel",
  word: "hermon",
  }, 
  {
  category: "kids games",
  word: "minecraft",
  }, 
  {
  category: "corona",
  word: "jerms",
  }, 
  {
  category: "corona",
  word: "mask",
  }];
  let words = []
  let answer = '';
  let lastMistake = 6;
  let mistakes = 0
  let choice = [];
 
  
    boxWords.forEach(elm =>{
      words.push(elm.word)
    })
    console.log(words)
    let boxCategory = document.getElementById('categories')
    console.log(boxCategory)
    answer = words[Math.floor(Math.random() * words.length)];
console.log(answer)
 boxWords.forEach(elm =>{
   if(answer === elm.word){
    boxCategory.innerHTML = elm.category
   }

 })

const lettersBox = document.getElementById('lettersBox')

let letterBtn = 'abcdefghijklmnopqrstuvwxyz'.split('')
console.log(letterBtn)
letterBtn.forEach(letter => {

  lettersBox.innerHTML += `<button class="btnLetter" id='${letter}' 
        onClick="handleClick('${letter}')">${letter}</button>`
})

let wordPlay = answer.split('')

wordPlay.forEach(letter => {
  letter = '_'
  choice.push(letter)

})
document.getElementById('wordSpot').innerHTML = choice.join('')

function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}

function reset() {

  document.location.reload()
}

function updateImg() {
  document.getElementById('hImg').src = 'img/' + mistakes + '.png';
}


function handleClick(clickLetter) {
  document.getElementById(clickLetter).setAttribute('disabled', true);
  let index = wordPlay.indexOf(clickLetter)

  if (index === -1) {
    mistakes++;
    console.log(mistakes)
    updateMistakes()
    updateImg()
    if (mistakes === lastMistake) {
      lettersBox.innerHTML = `<p id='lose'>Oh, its over!!!<p>`
    }
  } else {
    let indexes = []
    while (index !== -1) {

      indexes.push(index);
      index = wordPlay.indexOf(clickLetter, index + 1);
      console.log(indexes);
      indexes.forEach(ind => {
        choice.splice(ind, 1, clickLetter)

      })

    }
    document.getElementById('wordSpot').innerHTML = choice.join('')


    if (choice.join('') === answer) {
      lettersBox.innerHTML = `<p id='won'>You Won!!!</p>`
    }
  }
}



document.getElementById('lastMistake').innerHTML = lastMistake;