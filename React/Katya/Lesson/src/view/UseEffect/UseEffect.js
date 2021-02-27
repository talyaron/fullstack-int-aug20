import React, { useState, useEffect } from 'react'

let x = 0 //for use need to write global. other it will reload every time



    function UseEffect() {
        const [counter, setCounter] = useState(0);
        const [joke, setJoke] = useState('')
        const [jokeTwo, setJokeTwo] = useState('')

        function newJoke () {
            fetch('https://api.chucknorris.io/jokes/random')
            .then(r=>r.json())
            .then(joke=>{setJoke(joke.value)}) //SETJOKE IS HERE!!!
        }

        function newJoke2 () {
            fetch('https://api.chucknorris.io/jokes/random')
            .then(r=>r.json())
            .then(joke=>{setJokeTwo(joke.value)}) //SETJOKE IS HERE!!!
        }

        useEffect(() => { //calling only once
            newJoke()
        }, [counter]) //if counter changed, change the joke

        //newJoke() //if we won't put it in useEffect, the function will runing unlimited

        useEffect(() => { //calling only if counter bugger thatn 0
            if(counter !== 0){
            newJoke2()
        }
        }, [counter])


        // x=5

        console.log('hi', x);

        function handleCounter() { //+1 to counter
            setCounter(counter + 1);
            x++;
        }

        return (
            <div>
                <button onClick={handleCounter}>Add</button> {/* On click all the function is runing once */}
                <p>Counter: {counter}</p>
                <h2>{joke}</h2>
                <h2>{jokeTwo}</h2>
            </div>
        )
    }

export default UseEffect;