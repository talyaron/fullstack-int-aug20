const keys = document.querySelectorAll(".keyscontainer h1");
const TextBody = document.querySelector('#TextBody');
const TextHeader = document.querySelector(`#TextHeader`)
const maxNumberofStraiks = 6;
let word = {};
let Straiks = 0;
TextHeader.innerHTML="";

for (let i=0 ; i < maxNumberofStraiks; i++ ){

  TextHeader.innerHTML += `<span class="material-icons">favorite</span>`;
}

keys.forEach(key => {
  key.addEventListener("click", function () {
   
    starGuessing(key.innerHTML);    
  });
})

function checkStraiks(Straiks) {
  if (Straiks <= maxNumberofStraiks) {
    console.log("in te game")
    return true;
  } else {
    console.log("game over");
    TextBody.innerHTML = '<h1>Game Over</h1>'
    return false;
  }
}







function checkForMach(key) {
  let resolte = false; 
   for (let i = 0; i < word.length; i++) {

     console.log(`word:${(word[i].toUpperCase())}, key:${(key.toUpperCase())}`)
     console.log(word[i].toUpperCase() === key.toUpperCase());
     
    if (word[i].toUpperCase() === key.toUpperCase()) {
      let letter = document.querySelector(`#letter${i}`)
      letter.innerHTML = key;
      resolte = true;
    } 

  }

  return resolte;
}

function starGuessing(key){
  TextHeader.innerHTML = '';
 
  console.log(`the connent staricks: ${Straiks}`);
  if (checkForMach(key)== false){
    Straiks++; 
    let livesLeft = maxNumberofStraiks - Straiks;
for (let i=0 ; i < livesLeft; i++ ){

  TextHeader.innerHTML += `<span class="material-icons">favorite</span>`;
}
    
    console.log(Straiks);
  } ;
  if (Straiks >= maxNumberofStraiks) {
    console.log('game over');
    TextBody.innerHTML='';
    TextBody.innerHTML += `<h1>G</h1>`;
    TextBody.innerHTML += `<h1>A</h1>`;
    TextBody.innerHTML += `<h1>M</h1>`;
    TextBody.innerHTML += `<h1>E</h1>`;
    TextBody.innerHTML += `<h1> </h1>`;
    TextBody.innerHTML += `<h1>O</h1>`;
    TextBody.innerHTML += `<h1>V</h1>`;
    TextBody.innerHTML += `<h1>E</h1>`;
    TextBody.innerHTML += `<h1>R</h1>`;
    
  }

}


/*---------------------- renders ------------------*/


function renderwordscrean() {
  /* get word from local */
  let b = sessionStorage.getItem('rendomWordObj');
  b = JSON.parse(b);
  TextBody.innerHTML = '';
  word = b.word;
  console.log(word);

  for (var i = 0; i < word.length; i++) {
    TextBody.innerHTML += `<h1 id="letter${i}"></h1>`;
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