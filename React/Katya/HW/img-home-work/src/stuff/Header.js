import React from 'react'
import './Header.css'

function Header() {

    const styles = {
        div: {
            marginLeft: '20%',
        },
        h1: {
            margin:'0',
            paddingTop: '2%',
            color: 'white',
            textShadow:'0px 0px 5px grey'
        },
        p: {
            margin:'0',
            paddingTop: '2%',
            paddingBottom:'2%',
            fontSize: '1.5rem'
        }
    }


    return (
        <div className="main">
            <div style={styles.div}>
                <h1 style={styles.h1}>Hello World</h1>
                <p style={styles.p}>Here you can see all the stuff</p>
            </div>
        </div>
    )
}

export default Header;