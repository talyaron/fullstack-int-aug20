"use strict";

// //For loop
// for(let i=0 ; i<9 ; i++){
//     console.log(i);
// }
// let numbers = [123,123,5,5,6,1,3,4,56,,8,4,55,41,2,655,4,454];
// numbers.forEach(element => {
//     console.log(element);
// });
//Ex1
for (i = 1; i <= 1000; i++) {
  console.log(i);
}

x = 1;

while (x <= 1000) {
  console.log(x);
  x++;
} //Ex2


var someRandomArry = ['aaa', 'ccc', 'wew', 'qqwq', 'sadas', 'asdsad', 'asdsad', 'asdasd', 'asdgf'];
someRandomArry.map(function (mov, index) {
  console.log('Movie:', mov, ' and his index is:', index);
}); //Boom

for (i = 0; i < 100; i++) {
  if (i % 7 == 0) {
    console.log(i);
  }
}