function handlePrice(e) {
  products.sort((a, b) => a.price - b.price)
  root2.innerHTML = ""
  for (i = 0; i < products.length; i++) {
    if (chosenCategory == products[i].category) {
      root2.innerHTML += `<p class="product option"><img src="${products[i].image}"> שם מוצר: ${products[i].name}<br> מודל: ${products[i].model}, מחיר: ${products[i].price}, המלצות: ${products[i].recommendations}</p>`
      

    }
  }
}

function handleRecommend(e) {
  products.sort((a, b) => a.recommendations - b.recommendations)
  root2.innerHTML = ""
  for (i = 0; i < products.length; i++) {
    if (chosenCategory == products[i].category) {
      root2.innerHTML += `<p class="product option"><img src="${products[i].image}"> שם מוצר: ${products[i].name}<br> מודל: ${products[i].model}, מחיר: ${products[i].price}, המלצות: ${products[i].recommendations}</p>`
    }
  }
}