import React, { useState } from 'react';

let imgCounter = 0;


const imgs = [
    'https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340',
    'https://www.pressgazette.co.uk/wp-content/uploads/2020/11/shutterstock.jpg',
    'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGljdHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    'https://expertphotography.com/wp-content/uploads/2011/06/how-to-take-good-pictures-image2.jpg'
]

function Img() {
    const [img, setImg] = useState('https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340');

    function randomImg() {
        if (imgCounter === 3) {
            imgCounter = 0
        }

        imgCounter = Math.floor(Math.random() * imgs.length)

        setImg(imgs[imgCounter])
        console.log(imgCounter)
    }

    function listImg() {
        imgs.map((img, index) => { 
            return (<div onClick={randomImg}><img src={img} key={imdex}/></div>)
        })
    } 
        
    

    return (<div onClick={randomImg}><img src={img} /></div>)
}

// function List() {

//     {imgs.map((img) => { /* slice(0,2) - give us two first persons */
//         return (<div onClick={randomImg}><img src={img} /></div>)
//       })}
// }

export default Img;