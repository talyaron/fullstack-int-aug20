const keys = document.querySelectorAll(".keyscontainer h1");
const wordsContainer = document.querySelector('#wordsContainer');
const maxNumberofStraiks = 3;
let Straiks = 1;


keys.forEach(key => {
  key.addEventListener("click", function () {
    /* checkForMach2(key,word); */
    console.log(key.innerHTML);
    if (checkStraiks(Straiks)) {
      if (checkForMach(key.innerHTML == false)) {

        Straiks++;
        console.log(Straiks);
      }
    }
  });
})

function checkStraiks(Straiks) {
  if (Straiks <= maxNumberofStraiks) {
    console.log("in te game")
    return true;
  } else {
    console.log("game over");
    wordsContainer.innerHTML = '<h1>Game Over</h1>'
    return false;
  }
}

function renderCategories() {
  creatCategoriesArray();
  var BodyContainer = document.querySelector('.categorysContainer');
  var NewBodyContainer = '';
  categories.forEach(function (category) {
    var word = "<h1 onclick=\"oncategoryclick(event)\">".concat(category.category, "</h1>");
    NewBodyContainer += word;
  });
  BodyContainer.innerHTML = NewBodyContainer;
}
let word = {};


function renderwordscrean() {
  /* get word from local */

  let b = sessionStorage.getItem('rendomWordObj');
  b = JSON.parse(b);
  wordsContainer.innerHTML = '';
  word = b.word;
  console.log(word);

  for (var i = 0; i < word.length; i++) {
    wordsContainer.innerHTML += `<h1 id="letter${i}"></h1>`;
  }
}

function checkForMach(key) {
  firstCall = false;
  for (var i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() == key) {
      let letter = document.querySelector(`#letter${i}`)
      letter.innerHTML = key;
    } else {
      return "no mach";
    }
  }
}

function checkForMach2(key,word){
  let counter = 0;
  const regSearch = new RegExp(key.toUpperCase, 'gi')
   for (i = 0; i < word.length; i++) {
    if (regSearch.test(word.charAt(i))) {
        console.log("found")
       /*  chosenWordArray.splice(i, 1, `${clickedLetter}`) */
        let letter = document.querySelector(`#letter${i}`)
        letter.innerHTML = key;
    } else {
        counter++
    }
}
}