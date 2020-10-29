function CalculateAge(BirthYear, CurrentYear) {
  return CurrentYear - BirthYear;
}

// let MyAge = CalculateAge(1998,2020);
// console.log(MyAge);



function namesToObj(firstName, surname) {
  let obj = { firstName, surname }
  
  return obj;
}

namesToObj('cherut', 'gur');

let x = namesToObj('cherut', 'gur');
console.log(x);