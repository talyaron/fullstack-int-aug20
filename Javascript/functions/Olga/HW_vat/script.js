function calcVAT (price, vatRate){
    return price/(100+vatRate)*vatRate
}
let x = calcVAT(800, 17)
console.log(x)

const calcVAT1 = function(){
    let price = 800
    let vatRate = 17
    VAT = price/(100+vatRate)*vatRate
    return VAT
    }
    console.log(calcVAT1())



const calcVAT2 = (price, vatRate) =>{
    return price/(100+vatRate)*vatRate
}
let y = calcVAT2(800, 17)
console.log(y)