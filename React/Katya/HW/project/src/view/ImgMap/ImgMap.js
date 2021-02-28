import React from 'react';

function ImgMap(props) {
    const { imgs } = props;

    return (
            imgs.map(img => {
                    return (
                        <div >
                            <img src={img.src} />
                        </div>
                    )
                })
    )

}

export default ImgMap;