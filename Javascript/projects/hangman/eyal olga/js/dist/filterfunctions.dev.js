"use strict";

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

function getRendomWordByCategory(categorisArray) {
  /* הכנסת מערך מילים והחזרת מילה רנדומאלית */
  var arraylenth = categorisArray.length;
  var randomWord = categorisArray[Math.floor(Math.random() * arraylenth)];
  return randomWord;
}

function oncategoryclick(event) {
  console.log(event);
  var categoryword = event.target.innerHTML;
  var filterwords = filterWordsBySelectedCategory(categoryword);
  console.log(filterwords);
}

;