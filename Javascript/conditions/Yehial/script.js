const drinks = 
[
    {
        name:'cola',
        taste:'nice',
        caloris:150
    },
    {
        name:'fanta',
        taste:'good',
        caloris:120
    },
    {
        name:'grape',
        taste:'baaaa',
        caloris:90
    },
    {
        name:'cola',
<<<<<<< HEAD
        taste:'hhahahahahahah',
=======
        taste:'nice',
>>>>>>> master
        caloris:200
    }
]


for(let i of drinks){
    switch(i.caloris){
        case 150:{console.log(i.taste)}
        break;
        case 120:{console.log(i.taste)}
        break;
        case 90:{console.log(i.taste)}
        break;
        case 200:{console.log(i.taste)}
        break;
    }
    }
