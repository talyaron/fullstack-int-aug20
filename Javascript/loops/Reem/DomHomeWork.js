const Rivka = {
    name: 'Rivka',
    age:13,
    imgsrc:'<img src="img/1.jpg">'
}
const Nehonya = {
    name: 'Nehonya',

    age: 11,
    imgsrc:'<img src="img/2.jpg">'
}
const Cherut = {
    name: 'Cherut',
    age: 9,
    imgsrc:'<img src="img/3.jpg">'
}
const Nachshon = {
    name: 'Nachshon',
    age: 7,
    imgsrc:'<img src="img/4.jpg">'
}
const Tzurishaday = {
    name: 'Tzurishaday',
    age: 6,
    imgsrc:'<img src="img/5.jpg">'
}
const Kalev = {
    name: 'Kalev',
    age: 5,
    imgsrc:'<img src="img/6.jpg">'
}
const Moshe = {
    name: 'Moshe',
    age: 3,
    imgsrc:'<img src="img/7.jpg">'
}
const ShvutAmi = {
    name: 'Shvut Ami',
    age: 1,
    imgsrc:'<img src="img/8.jpg">'
}
let myChildren = [Rivka, Nehonya, Cherut, Nachshon, Tzurishaday, Kalev, Moshe,ShvutAmi];
const root = document.getElementById('root');
console.log(myChildren);
root.innerHTML+=(`<h1> MY CHILDREN`)
for (let i of myChildren) {
    if (i.age > 0) {
        
        root.innerHTML += (`<h2>${i.imgsrc}${i.name} is ${i.age} years old  </h2>`);
    } else if (i.age == 6) {
        root.innerHTML += (`<h2>${i.imgsrc}${i.name} is ${i.age} years old right now</h2>`);
        root.innerHTML += ('the athers are below 6');
    } 
}