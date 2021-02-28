import React from 'react';

import './dist/FoodItem.css'

function FoodItem(props) {
    const { img } = props
    return (
        <div className="FoodItem">
            <img src={img.src} alt={img.alt} className="FoodItem__img" />
            <div className="FoodItem__info">
                <header className="FoodItem__info--header">
                    <h4>{img.header}</h4>
                    <h4>{img.price}</h4>
                </header>
                <p>{img.text}</p>

            </div>
        </div>
    )

}

export default FoodItem;