import React, { useState } from 'react'; //useState = hooks

const mockData = [
    { src: 'https://www.w3schools.com/howto/img_snow_wide.jpg' },
    { src: 'https://www.w3schools.com/howto/img_mountains_wide.jpg' },
    { src: 'https://www.w3schools.com/howto/img_lights_wide.jpg' }
]

function Box(props) {
    //There are two options for sending objects

    //----First----//
    const [url, setUrl] = useState(mockData[0].src)
    const [color, setColor] = useState('red');
    const [counter, setCounter] = useState(1);
    const [password, setPassword] = useState('123')

    const { name, gender } = props.info;

    let x = 1;

    //---RANDOM IMG---//

    function randomImg() {
        let r = Math.floor(Math.random() * mockData.length);
        setUrl(mockData[r].src)
    }

    //----RANDOM COLOR----//

    function randomColor() {
        setColor('#' + ((1 << 24) * Math.random() | 0).toString(16))
        setCounter(counter + 1)
    }

    //---RANDOM PASSWORD---//

    function xPlus(e) {
        console.log(e)
        x++
        setColor('#' + ((1 << 24) * Math.random() | 0).toString(16))
        setPassword(Math.random().toString(36).slice(-8))
    }

    return (
        <div style={{padding:'1%', width:'100%'}}>
            <img src={url} alt='bla' onClick={randomImg} style={{width:'90%'}}/>
            <h1 style={{ color: color, width:'90%', marginLeft:'5%' }} onMouseOver={xPlus} onClick={randomColor}>
                Hello {name} you are {gender}: {counter}, and your password is: {password}
            </h1>
        </div>
    )

    //----Second----//

    // return (  
    //     <h1>Hello {props.info.name} you are {props.info.gender}</h1>
    // )
}

//מחלץ את שני העיברים הראשונים מהמערך
/*
let x = [1, 2, 3, 4, 5, 6, 7, 8]
let [a, b] = x   => a=1, b=2 
*/

export default Box;