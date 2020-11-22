function handleSearch(e) {
    e.preventDefault();

    const searchTerm = e.target.children.search.value;

    if (searchTerm.length > 1) {
        const results = searchProducts(searchTerm);
        renderSearchResults(results);

    }
}
let results = []

function searchProducts(searchTerm) {
    const regSearch = new RegExp(searchTerm, 'g')
    products.forEach(product => {
        if (regSearch.test(product.name) || regSearch.test(product.category) || regSearch.test(product.model)) {
            results.push(product);
            hil();
        }
    })


    return results;
}

function renderSearchResults(results) {
    const root = document.getElementById('root');

    let html = '';
    results.forEach(product => {
        html += `<a href="${product.Link}"><div class="card"><p>Product name:${product.name}</br> Product Model: ${product.model}</br> Price: ${product.price}</p></div></a>`
    })
    root.innerHTML = html;
}

const core = document.querySelector(".core")
const button = document.querySelector("#button")
const cotert = document.querySelector(".cotert")
const root = document.querySelector("#root")


function hil() {
    core.style.display = "block"
    cotert.style.borderRadius = "10px 10px 0 0"
    root.style.border = '5px solid rgb(105, 105, 105)'

}

let roothtml = ""
function hiderezolt(event) {
    const input = event.target.value;
    console.log(event)
    if (input.length < 1 || input.length > 5) {

        root. innerHTML = roothtml

    }
    else {
        console.log('hillel')
    }
    // root.innerHTML = roothtml
}