import React, { useState } from 'react';
import FoodItem from '../FoodItem/FoodItem'

import './dist/ImgArray.css'

function ImgArray() {

    const [imgs, setImgs] = useState([
        {
            src: '/img/item-1.jpeg',
            header: 'Buttermilk Pancakes',
            price: '$15',
            text: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
            alt: 'no pic'
        },
        {
            src: '/img/item-2.jpeg',
            header: 'Diner Double',
            price: '$15',
            text: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
            alt: 'no pic'
        },
        {
            src: '/img/item-3.jpeg',
            header: 'Godzilla Milkshake',
            price: '$15',
            text: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
            alt: 'no pic'
        },
        {
            src: '/img/item-4.jpeg',
            header: 'Country Delight',
            price: '$15',
            text: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut.",
            alt: 'no pic'
        },
        {
            src: '/img/item-5.jpeg',
            header: 'Egg Attack',
            price: '$15',
            text: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
            alt: 'no pic'
        },
        {
            src: '/img/item-6.jpeg',
            header: 'Oreo Dream',
            price: '$15',
            text: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
            alt: 'no pic'
        },
        {
            src: '/img/item-7.jpeg',
            header: 'Bacon Overflow',
            price: '$15',
            text: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
            alt: 'no pic'
        },
        {
            src: '/img/item-8.jpeg',
            header: 'American Classic',
            price: '$15',
            text: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
            alt: 'no pic'
        },
        {
            src: '/img/item-9.jpeg',
            header: 'Quarantine Buddy',
            price: '$15',
            text: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
            alt: 'no pic'
        }
    ])

    function showAll() {
        setImgs(
            [
                {
                    src: '/img/item-1.jpeg',
                    header: 'Buttermilk Pancakes',
                    price: '$15',
                    text: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
                    alt: 'no pic'
                },
                {
                    src: '/img/item-2.jpeg',
                    header: 'Diner Double',
                    price: '$15',
                    text: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
                    alt: 'no pic'
                },
                {
                    src: '/img/item-3.jpeg',
                    header: 'Godzilla Milkshake',
                    price: '$15',
                    text: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
                    alt: 'no pic'
                },
                {
                    src: '/img/item-4.jpeg',
                    header: 'Country Delight',
                    price: '$15',
                    text: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut.",
                    alt: 'no pic'
                },
                {
                    src: '/img/item-5.jpeg',
                    header: 'Egg Attack',
                    price: '$15',
                    text: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
                    alt: 'no pic'
                },
                {
                    src: '/img/item-6.jpeg',
                    header: 'Oreo Dream',
                    price: '$15',
                    text: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
                    alt: 'no pic'
                },
                {
                    src: '/img/item-7.jpeg',
                    header: 'Bacon Overflow',
                    price: '$15',
                    text: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
                    alt: 'no pic'
                },
                {
                    src: '/img/item-8.jpeg',
                    header: 'American Classic',
                    price: '$15',
                    text: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
                    alt: 'no pic'
                },
                {
                    src: '/img/item-9.jpeg',
                    header: 'Quarantine Buddy',
                    price: '$15',
                    text: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
                    alt: 'no pic'
                }
            ]
        )
    }

    function showBreakfast() {
        setImgs([
            {
                src: '/img/item-1.jpeg',
                header: 'Buttermilk Pancakes',
                price: '$15',
                text: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
                alt: 'no pic'
            },
            {
                src: '/img/item-4.jpeg',
                header: 'Country Delight',
                price: '$15',
                text: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut.",
                alt: 'no pic'
            },
            {
                src: '/img/item-7.jpeg',
                header: 'Bacon Overflow',
                price: '$15',
                text: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
                alt: 'no pic'
            }
        ])
    }

    function showLunch() {
        setImgs([
            {
                src: '/img/item-2.jpeg',
                header: 'Diner Double',
                price: '$15',
                text: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
                alt: 'no pic'
            },
            {
                src: '/img/item-5.jpeg',
                header: 'Egg Attack',
                price: '$15',
                text: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
                alt: 'no pic'
            },
            {
                src: '/img/item-8.jpeg',
                header: 'American Classic',
                price: '$15',
                text: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
                alt: 'no pic'
            }
        ])
    }

    function showShakes() {
        setImgs([
            {
                src: '/img/item-3.jpeg',
                header: 'Godzilla Milkshake',
                price: '$15',
                text: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
                alt: 'no pic'
            },
            {
                src: '/img/item-6.jpeg',
                header: 'Oreo Dream',
                price: '$15',
                text: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
                alt: 'no pic'
            },
            {
                src: '/img/item-9.jpeg',
                header: 'Quarantine Buddy',
                price: '$15',
                text: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
                alt: 'no pic'
            }
        ])

    }

    return (
        <div>
            <div className="Header">
                <h1>Our Menu</h1>
                <div className="HeaderUnderline"></div>
                <div className="HeaderButton__main">
                    <button onClick={showAll} className="HeaderButton">All</button>
                    <button onClick={showBreakfast} className="HeaderButton">Breakfast</button>
                    <button onClick={showLunch} className="HeaderButton">Lunch</button>
                    <button onClick={showShakes} className="HeaderButton">Shakes</button>
                </div>
            </div>
            <div className="ImgGrid">
                {imgs.map((img, index) => {
                    return (
                        <div >
                            <FoodItem img={img} key={index} />
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default ImgArray;