const Rivka = {
    name: 'Rivka',
    age:13
}
const Nehonya = {
    name: 'Nehonya',
    age: 11
}
const Cherut = {
    name: 'Cherut',
    age: 9
}
const Nachshon = {
    name: 'Nachshon',
    age: 7
}
const Tzurishaday = {
    name: 'Tzurishaday',
    age: 6
}
const Kalev = {
    name: 'Kalev',
    age: 5
}
const Moshe = {
    name: 'Moshe',
    age: 3
}
const ShvutAmi = {
    name: 'Shvut Ami',
    age: 1
}
let myChildren = [Rivka, Nehonya, Cherut, Nachshon, Tzurishaday, Kalev, Moshe,ShvutAmi];
const root = document.getElementById('root');
console.log(myChildren);

for (let i of myChildren) {
    if (i.age > 6) {
        root.innerHTML += (`<h2>${i.name} is ${i.age} years old </h2>`);
    } else if (i.age == 6) {
        root.innerHTML += (`<h2>${i.name} is ${i.age} years old right now</h2>`);
        root.innerHTML += ('the athers are below 6');
    } else {

    }
}