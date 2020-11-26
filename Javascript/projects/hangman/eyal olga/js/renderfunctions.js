function renderCategories(){
    creatCategoriesArray();
    const BodyContainer = document.querySelector('.categorysContainer');
    let NewBodyContainer = '';
      categories.forEach((category) => {
        const word = `<h1>${category.category}</h1>`;
      NewBodyContainer += word;
    })
    BodyContainer.innerHTML = NewBodyContainer;
}

render