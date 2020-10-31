

function vatCalc1(
    itemPrice,vatReturn
)
{
    return itemPrice * (1+(vatReturn/100) );
}


 const vatCalc2 = function (
    itemPrice,vatReturn
)
{
    return itemPrice * (1+(vatReturn/100) );
}




 const vatCalc3 = (itemPrice,vatReturn)=>{
    return itemPrice * (1+(vatReturn/100) );
}

console.log(vatCalc1(50,17));
console.log(vatCalc2(70,17));
console.log(vatCalc3(90,17));