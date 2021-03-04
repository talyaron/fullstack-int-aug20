import React from 'react';

import './dist/FoodItem.css'

function FoodItem(props) {
    const { img, index } = props
    return (
        <div className="FoodItem">
            <img key={index} src={img.src} alt={img.alt}  className="FoodItem__img" />
            <div className="FoodItem__info">
                <header className="FoodItem__info--header">
                    <h4 className="FoodItem__info--h4Header">{img.header}</h4>
                    <h4 className="FoodItem__info--h4Price">{img.price}</h4>
                </header>
                <div className="FoodItem__info--Underline"></div>
                <p className="FoodItem__info--p">{img.text}</p>

            </div>
        </div>
    )

}

export default FoodItem;