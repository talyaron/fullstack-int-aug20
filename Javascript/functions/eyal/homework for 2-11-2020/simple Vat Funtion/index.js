function vat1(itemPraice,VatRet){
    return itemPraice*(1+(VatRet/100));
}

const vat2 = function (itemPraice,VatRet){
    return  itemPraice * (1+(VatRet/100));
}


const vat3 = (itemPraice,VatRet) =>{
    return  itemPraice * (1+(VatRet/100));
}


const vat4 =(itemPraice,VatRet)=>itemPraice * (1+(VatRet/100));

console.log(vat1(100,17));
console.log(vat2(100,17));
console.log(vat3(100,17));
console.log(vat4(100,17));
