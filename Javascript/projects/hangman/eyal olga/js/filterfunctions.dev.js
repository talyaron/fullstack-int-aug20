"use strict";

var rendomWord = '';

function removeDuplicateObjectFromArray(array, key) {
  var check = {};
  var res = [];

  for (var i = 0; i < array.length; i++) {
    if (!check[array[i][key]]) {
      check[array[i][key]] = true;
      res.push(array[i]);
    }
  }

  return res;
}

function creatCategoriesArray() {
  /* הפעלת פונקצית הסרת כפילויות והסמה בתוך המערך קטגוריות */
  categories = removeDuplicateObjectFromArray(words, 'category');
}

function filterWordsBySelectedCategory(categiry) {
  /* יצירת מערך מילים לפי קטגוריה שנבחרה */
  var wordsByCategory = words.filter(function (word) {
    return word.category.toUpperCase() == categiry.toUpperCase();
  });
  return wordsByCategory;
}

function getrendomWordByCategory(categorisArray, lastWord) {
  /* הכנסת מערך מילים והחזרת מילה רנדומאלית */
  var arraylenth = categorisArray.length;
  var randomWord = categorisArray[Math.floor(Math.random() * arraylenth)];

  if (randomWord != '') {
    return randomWord;
  } else {
    var _randomWord = categorisArray[Math.floor(Math.random() * arraylenth)];

    if (_randomWord != lastWord) {
      return _randomWord;
    } else {
      var _randomWord2 = categorisArray[Math.floor(Math.random() * arraylenth)];

      if (_randomWord2 != lastWord) {
        return _randomWord2;
      } else {
        var _randomWord3 = categorisArray[Math.floor(Math.random() * arraylenth)];

        if (_randomWord3 != lastWord) {
          return _randomWord3;
        } else {
          var _randomWord4 = categorisArray[Math.floor(Math.random() * arraylenth)];
          return _randomWord4;
        }
      }
    }
  }
}

function oncategoryclick(event) {
  var lastWord = rendomWord;
  console.log(event);
  var categoryword = event.target.innerHTML;
  var filterwords = filterWordsBySelectedCategory(categoryword);
  rendomWord = getrendomWordByCategory(filterwords, lastWord);
  sessionStorage.setItem('rendomWordObj', JSON.stringify(rendomWord));
  window.open('app.html', "_self");
}

;