// מערך אוטומטי שנוצר + קטגוריה
let ProductsFiltered = []

// דוחף נתונים למערך ללא כפולים
products.forEach(product => {
    if (ProductsFiltered.indexOf(product.category) == -1) {
        ProductsFiltered.push(product.category)
    }
})


// חיפוש + קריאה לפונקציות התוצאה
function handleSearch(e) {
    e.preventDefault();
    const searchTerm = e.target.children.search.value;
<<<<<<< HEAD
    if (searchTerm.length > 2) {
=======

    if (searchTerm.length > 1) {
>>>>>>> master
        const results = searchProducts(searchTerm);
        renderSearchResults(results);
    }
}

// תנאי החיפוש
function searchProducts(searchTerm) {
    let results = []
    const regSearch = new RegExp(searchTerm, 'g')
    products.forEach(product => {
        if (regSearch.test(product.name) || regSearch.test(product.category) || regSearch.test(product.model)) {
            results.push(product);
            hil();
        }
    })
    return results;
}

// מעביר תוצאות ל html
function renderSearchResults(results) {
    const root = document.getElementById('root');
    let html = '';
    results.forEach(product => {
        html += `<a href="${product.Link}"><div class="card"><p>Product name:${product.name}</br> Product Model: ${product.model}</br> Price: ${product.price}</p></div></a>`
    })
    root.innerHTML = html;
}

// הצגת קטוגוריות
let textCategory = "";
function showCategory(event) {
    for (i = 0; i < ProductsFiltered.length; i++) {
        textCategory += `<div class="category"value="${ProductsFiltered[i]}" onclick="openCtegory(event)">${ProductsFiltered[i]}</div>`
        document.querySelector("#category").innerHTML = textCategory;
    }

}
function openCtegory(event) {
    const prodctfilter = event.target.innerText
    console.log(prodctfilter)
    console.log(event)
    products.forEach(function (event) {
        console.log(event.category)
        // html+= `<div onclick="${}"></div>`
    })
}
// console.log(products.name)

const core = document.querySelector(".core")
const button = document.querySelector("#button")
const cotert = document.querySelector(".cotert")
const root = document.querySelector("#root")
const div = document.querySelector(".div")

function hil() {
    core.style.display = "block"
    cotert.style.borderRadius = "10px 10px 0px 0px"
    root.style.border = '15px solid rgba(105, 105, 105, 0.102)'

}

let roothtml = ""

function hiderezolt(event) {
    const input = event.target.value;
    if (input.length < 1) {
        root.innerHTML = roothtml
        core.style.display = "none"
        cotert.style.borderRadius = "10px 10px 0px 0px"
        root.style.border = '0px solid  rgba(255, 255, 255, 0)'
    }
}



