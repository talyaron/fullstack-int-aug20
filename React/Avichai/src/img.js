import React, { useState } from 'react';
import './index.css';

const Img = () => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    const [imageSrc, setImg] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTVZtU65qBqHdcipuQrx9fWykcT3H_qQLxAA&usqp=CAU')

    const randomImg = () => {
        setImg(imgArr[getRandomInt(4)])
    }
    const imgArr = ['https://picsum.photos/200/300',
    'https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634-750x450.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIW3AiJyJ1Q6usG_c-MEK5Z9jyE6H0VD1k7w&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbySopxhYHbpzaomZQdtSfnC_u0Fo3fXECNQ&usqp=CAU']

    return (<div onClick={randomImg}><img src={imageSrc} /></div>)
}


export default Img