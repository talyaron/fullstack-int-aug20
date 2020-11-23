// מערך אוטומטי שנוצר + קטגוריה
let ProductsFiltered = []

// דוחף נתונים למערך ללא כפולים
products.forEach(product => {
    if (ProductsFiltered.indexOf(product.category) == -1) {
        ProductsFiltered.push(product.category)
    }
})


// חיפוש + קריאה לפונקציות התוצאה
handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.children.search.value;
    if (searchTerm.length > 2) {
        const results = searchProducts(searchTerm);
        renderSearchResults(results);
    }
}

// תנאי החיפוש
searchProducts = (searchTerm) => {
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
renderSearchResults = (results) => {
    const root = document.getElementById('root');
    let html = '';
    results.forEach(product => {
        html += `<a href=""><div class="card"><p>Product name:${product.name}</br> Product Model: ${product.model}</br> Price: ${product.price}</p></div>  <div id="showprodctfilter"></div></a>`
        html += `<div id="category"></div>`
    })
    root.innerHTML = html;
}

// הצגת קטוגוריות

showCategory = (event) => {
    let textCategory = "";
    for (i = 0; i < ProductsFiltered.length; i++) {
        textCategory += `<div class="category"value="${ProductsFiltered[i]}" onclick="openCtegory(event)" ><p>${ProductsFiltered[i]}</p></div>`
        document.querySelector("#category").innerHTML = textCategory;
    }

}

const core = document.querySelector(".core")
const button = document.querySelector("#button")
const cotert = document.querySelector(".cotert")
const root = document.querySelector("#root")
const div = document.querySelector(".div")

hil = () => {
    core.style.display = "block"
    cotert.style.borderRadius = "10px 10px 0px 0px"
    root.style.border = '15px solid rgba(105, 105, 105, 0.102)'

}

let roothtml = ""

hideresults = (event) => {
    const input = event.target.value;
    if (input.length < 1) {
        root.innerHTML = roothtml
        core.style.display = "none"
        cotert.style.borderRadius = "10px 10px 0px 0px"
        root.style.border = '0px solid  rgba(255, 255, 255, 0)'
    }
}


// נסיון מוצלח

openCtegory = (e) => {
    let results = []
    const prodctfilter = e.target.innerText
    const regSearch = new RegExp(prodctfilter, 'g')
    products.forEach(product => {
        if (regSearch.test(product.category)) {
            results.push(product);
        }
    })
    console.log(prodctfilter)

    let showprodctfilter = "";

    for (i = 0; i < results.length; i++) {
        showprodctfilter += `<div class="showprodctfilter" onclick="displayProductsFun(event)">${results[i].name}</div>` // from ${results[i].brand} price ${results[i].price}
        document.querySelector("#showprodctfilter").innerHTML = showprodctfilter;
    }
    // scroll(0, 1000)
    // מתגים לשינוי מחיר
    const pris = document.querySelector(".pris")
    const divcolor = document.querySelector(".divcolor")

    if (divcolor.style.marginLeft == '0px') {
        divcolor.style.marginLeft = "22px"
    } else {
        pris.style.backgroundColor = "rgb(180, 180, 180)"
        divcolor.style.marginLeft = "0px"
    }


    pris.addEventListener("click", function (event) {
        if (divcolor.style.marginLeft == '0px') {
            pris.style.backgroundColor = "rgb(0, 90, 173)"
            divcolor.style.marginLeft = "23px"
            // scroll(0, 1000)

            results = results.sort((a, b) => {
                return a.price - b.price
            })
            console.log(results)

        } else {
            pris.style.backgroundColor = "rgb(180, 180, 180)"
            divcolor.style.marginLeft = "0px"
        }
    })
}
const card=document.querySelector(".card")
// const displayproducts = document.querySelector(".displayproducts")

displayProductsFun = (e) => {
    let productsInfo = []
    const prodctfilter = e.target.innerText
    const regSearch = new RegExp(prodctfilter, 'g')
    let hk=""
    products.forEach(product => {
       
        if (regSearch.test(product.name)) {
            productsInfo.push(product);
            card.style.display="block"
           
            
         
                hk += `<div class="prod"><div class="text1"><b>name: </b>${product.name}</div><div class="text2"><b>brand: </b>${product.brand}</div><div class="text2"><b>category: </b>${product.category}</div><div class="text2"><b>description: </b>${product.description}</div><div class="text5"><img src="${product.image}"></div><div class="text2"><b>inStoreSince: </b>${product.inStoreSince}</div><div class="text2"><b>isdn: </b>${product.isdn}</div><div class="text2"><b>model: </b>${product.model}</div><div class="text2"><b>name: </b>${product.name}</div><div class="text2"><b>price: </b>${product.price}</div><div class="text2"><b>recommendations:</b>${product.recommendations}</div><div class="text2"><b>store: </b>${product.store}</div></div>`
         
            }
            document.querySelector(".v").innerHTML = hk;
            console.log(productsInfo)
        
        
        // console.log(productsInfo)

    })
    
}
function clickxx(){
    card.style.display="none"
}