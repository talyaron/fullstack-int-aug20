import React, { useState } from 'react';
import './index.css';
let imgCounter = 0
const Img = () => {

    const [imageSrc, setImg] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTVZtU65qBqHdcipuQrx9fWykcT3H_qQLxAA&usqp=CAU')

    const randomImg = () => {
        if (imgCounter === 5) {
            imgCounter = 0
        }


        setImg(imgArr[imgCounter])

        imgCounter++
    }
    const imgArr = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI88FaOfB0mMCBZclAwmtUXtZDE4zSNk-h9A&usqp=CAU',
        'https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634-750x450.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIW3AiJyJ1Q6usG_c-MEK5Z9jyE6H0VD1k7w&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbySopxhYHbpzaomZQdtSfnC_u0Fo3fXECNQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTVZtU65qBqHdcipuQrx9fWykcT3H_qQLxAA&usqp=CAU'
    ]

    return (<div className='randomImg' onClick={randomImg}><img src={imageSrc} /></div>)
}


export default Img