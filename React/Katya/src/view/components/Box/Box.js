import React, { useState } from 'react'; //useState = hooks

function Box(props) {
    //There are two options for sending objects
    //----First----//
    const [color, setColor] = useState('red');
    const [counter, setCounter] = useState(1); 
    const [password, setPassword] = useState('123')

    let x = 1;

    function randomColor() {
        setColor('#' + ((1<<24)*Math.random() | 0 ).toString(16))
        setCounter(counter+1)
    }

    function xPlus() {
        x++
        setColor('#' + ((1<<24)*Math.random() | 0 ).toString(16))
        setPassword(Math.random().toString(36).slice(-8))
    }



    const { name, gender } = props.info;

    // console.dir(useState()) //showing all functions

    return (
        <h1 style={{color:color}} onMouseOver={xPlus} onClick={randomColor}>Hello {name} you are {gender}: {counter}, and your password is: {password}</h1>
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