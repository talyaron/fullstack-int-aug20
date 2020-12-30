const root = document.querySelector('.root');

const getRecipes = (e) => {

  e.preventDefault()

  const {
    ingredient
  } = e.target.children;
  ingredientToSearch = ingredient.value;
  console.log(ingredientToSearch);

  fetch('/try', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ingredientToSearch
      })
    })
    .then(r => r.json())
    .then(data => {
      let resipes = data.results;
      console.log(resipes);

      let html = '';

      resipes.forEach(resipe => {
        html += `<ul><li><a href='${resipe.href}'>${resipe.title}</a></li></ul>`;
      });

      root.innerHTML = html;
    })
}