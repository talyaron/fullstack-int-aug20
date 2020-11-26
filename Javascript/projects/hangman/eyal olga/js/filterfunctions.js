let rendomWord ='';

function removeDuplicateObjectFromArray(array, key) {
  let check = {};
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (!check[array[i][key]]) {
      check[array[i][key]] = true;
      res.push(array[i]);
    }
  }
  return res;
}

function creatCategoriesArray() { /* הפעלת פונקצית הסרת כפילויות והסמה בתוך המערך קטגוריות */
  categories = removeDuplicateObjectFromArray(words, 'category');
}

function filterWordsBySelectedCategory(categiry) {  /* יצירת מערך מילים לפי קטגוריה שנבחרה */
  let wordsByCategory = words.filter(word => word.category.toUpperCase() == categiry.toUpperCase());
  return wordsByCategory;
}


function getrendomWordByCategory(categorisArray,lastWord){  /* הכנסת מערך מילים והחזרת מילה רנדומאלית */
  let arraylenth = categorisArray.length;
  let  randomWord = categorisArray[Math.floor(Math.random() * arraylenth)];
  if (randomWord != '' ){
    return randomWord;
  }else{
    let  randomWord = categorisArray[Math.floor(Math.random() * arraylenth)]; 
    if (randomWord != lastWord ){
      return randomWord;
    }else{
      let  randomWord = categorisArray[Math.floor(Math.random() * arraylenth)]; 
      if (randomWord != lastWord ){
        return randomWord;
      }else{
        let  randomWord = categorisArray[Math.floor(Math.random() * arraylenth)]; 
        if (randomWord != lastWord ){
          return randomWord;
        }else{
          let  randomWord = categorisArray[Math.floor(Math.random() * arraylenth)]; 
          return randomWord;
        }
      } 
    }
  }
  
}



function oncategoryclick(event){
  let lastWord = rendomWord;
  console.log(event);
  let categoryword = event.target.innerHTML;
let filterwords = filterWordsBySelectedCategory(categoryword);
rendomWord = getrendomWordByCategory(filterwords,lastWord);
sessionStorage.setItem('rendomWordObj',JSON.stringify(rendomWord));
window.open('app.html',"_self");
};