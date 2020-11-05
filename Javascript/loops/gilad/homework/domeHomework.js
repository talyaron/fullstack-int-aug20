function headphones(brand, model, type, wireless, anc, waterproof, price) {

    this.brand = brand
    this.model = model
    this.type = type;
    this.wireless = wireless;
    this.anc = anc;
    this.waterproof = waterproof;
    this.price = price;
}
let qc35 = new headphones('bose', 'qc35', 'headphones', true, true, false, 1000)
let xm4 = new headphones('sony', 'xm4', 'headphones', true, true, false, 1200)
let qcEarbuds = new headphones('bose', 'QcEarbuds', 'earbuds', true, true, true, 900)
let wfxm3 = new headphones('sony', 'wfxm3', 'earbuds', true, true, false, 800)

headphonesArr = [qc35, xm4, qcEarbuds, wfxm3]
const root = document.getElementById('root')

function filterPrice() {
    let html = ``

    for (let i = 0; i < 4; i++) {

        if (headphonesArr[i].price < 1000) {

            html += `<p> Brand: ${headphonesArr[i].brand} | Model: ${headphonesArr[i].model} | type: ${headphonesArr[i].type} | wireless: ${headphonesArr[i].wireless} | anc: ${headphonesArr[i].anc} | waterpfoof: ${headphonesArr[i].waterproof} | price: ${headphonesArr[i].price} </p>`

        }
        root.innerHTML = html;



    }

}
function filterBose() {
    let html = ``

    headphonesArr.forEach(headphone => {
    
        if (headphone.brand == 'bose') {

            html += `<p> Brand: ${headphone.brand} | Model: ${headphone.model} | type: ${headphone.type} | wireless: ${headphone.wireless} | anc: ${headphone.anc} | waterpfoof: ${headphone.waterproof} | price: ${headphone.price} </p>`

        }
    })

    root.innerHTML = html;



}


function filterSony() {
    let html = ``

    for (let i = 0; i < 4; i++) {

        if (headphonesArr[i].brand == 'sony') {

            html += `<p> Brand: ${headphonesArr[i].brand} | Model: ${headphonesArr[i].model} | type: ${headphonesArr[i].type} | wireless: ${headphonesArr[i].wireless} | anc: ${headphonesArr[i].anc} | waterpfoof: ${headphonesArr[i].waterproof} | price: ${headphonesArr[i].price} </p>`

        }
        root.innerHTML = html;



    }

}
function filterNone() {
    let html = ``

    for (let i = 0; i < 4; i++) {

        if (true) {

            html += `<p> Brand: ${headphonesArr[i].brand} | Model: ${headphonesArr[i].model} | type: ${headphonesArr[i].type} | wireless: ${headphonesArr[i].wireless} | anc: ${headphonesArr[i].anc} | waterpfoof: ${headphonesArr[i].waterproof} | price: ${headphonesArr[i].price} </p>`

        }
        root.innerHTML = html;



    }

}
