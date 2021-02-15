import React, { useState } from 'react';
import './index.css';


const Places = () => {
    const [color, setColor] = useState('red')
    const [counter, setCount] = useState(1)

     
    const randomColor = () => {
        setColor("#" + ((1 << 24) * Math.random() | 0).toString(16))
        setCount(counter+1)
    }

    const places = [
        { title: 'bla', desc: '2 rooms', price: 5000, img: 'https://static.trip101.com/paragraph_media/pictures/001/591/649/large/d4315261-d756-4cfc-a927-4cb39a3e7e46.jpg?1552634605' },
        { title: 'bla2', desc: '5 rooms', price: 2774, img: 'https://a0.muscache.com/im/pictures/miso/Hosting-36341034/original/744f1702-98fd-4585-bbbe-8c542e82296b.jpeg?im_w=720' },
        { title: 'bla3', desc: '6 rooms', price: 5555, img: 'https://a0.muscache.com/im/pictures/2934b6d6-32b3-4be3-a5cf-f69247b8ee25.jpg?im_w=480' },
        { title: 'bla4', desc: '1 rooms', price: 1234, img: 'https://a0.muscache.com/im/pictures/miso/Hosting-33909319/original/e9aac12d-c2cf-4f12-8560-4e9cec029386.jpeg?im_w=720' }
    ]

    const placesMap = places.map(place =>
    (<div style={{ color: color }} onClick={randomColor}  className='placeBox' key={place.title}>
        <img src={place.img} />
        <h1>{place.title}</h1>
        <h3>{place.desc}</h3>
        <h3>Price: {place.price}</h3>
        {counter}
    </div>)
    )

    return (renderBox(placesMap))
}


const renderBox = (placesBox) => {
    return (<div className='placesContainer'>{placesBox}</div>)
}

export default Places