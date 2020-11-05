const drinks = [
    {
        name: 'קולה',
        price: '6',
        currency: 'שח',
        type: 'מוגז',
        Amount: '1000'
    },
    {
        name: 'תפוזינה',
        price: '10',
        currency: 'שח',
        type: 'טיבעי',
        Amount: '300'
    },
    {
        name: 'ספריט',
        price: '5',
        currency: 'שח',
        type: 'מוגז',
        Amount: '600'
    },
    {
        name: 'אקסל',
        price: '3',
        currency: 'שח',
        type: 'מוגז',
        Amount: '10000'
    },
    {
        name: 'שוקו',
        price: '1.5',
        currency: 'שח',
        type: 'חלבי',
        Amount: '300'
    }];

drinks.forEach(drink => {
    switch (drink) {
        case 'מוגז':
            console.log(`יש רק ${drink.price} יחידות`)
            break;
        case 'חלב':
            console.log(`יש רק ${drink.price} יחידות`)
            break;
            default:
                console.log('couldnt find the symbol')
    }
});
