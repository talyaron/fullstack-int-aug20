const keys = document.querySelectorAll(".keyscontainer h1");
keys.forEach(key => {
  key.addEventListener("click", function () {
    checkForMach(key.innerHTML);
    /* console.log(key.innerHTML) */
  });
})


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
  let wordsContainer = document.querySelector('#wordsContainer');
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
  for (var i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() == key) {
      let letter = document.querySelector(`#letter${i}`)
      letter.innerHTML = key;
    }
  }
}