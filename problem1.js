function newPrice(currentPrice, discount) {
    if (typeof currentPrice !== 'number' || typeof discount !== 'number') {
        return 'Invalid';
    }

    if ((isNaN(currentPrice) || isNaN(discount))||(discount < 0 || discount > 100) ){
        return 'Invalid';
    }

    const discountedAmount = (currentPrice * discount) / 100;
    const newPrice = currentPrice - discountedAmount;

    return (newPrice.toFixed(3));
}

console.log(newPrice(2000, 17.17));