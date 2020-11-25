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


  function creatCategoriesArray(){
    categories = removeDuplicateObjectFromArray(words , 'category') ;
   
  }


  