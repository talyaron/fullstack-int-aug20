import React, { useState } from 'react'

function Img() {

    let img = [{ src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' }]

    const [url, setUrl] = useState(img[0].src)



    function handleUrl(e) {
        e.preventDefault();

        setUrl(e.target.children.url.value)
        console.log(e.target.children.url.value)

        e.target.reset()

    }

    return (
        <div>
            <p>Choose the image that you want. Enter URL of image</p>

            <form onSubmit={handleUrl}>
                <input
                    type='url'
                    placeholder='Enter url'
                    name='url'
                />
                <button type="submit">Send</button>
            </form>
            <img src={url} />
        </div>
    )
}

export default Img;