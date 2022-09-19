function fruit(fruitType, grams, pricePerKilog) {
    let kilograms = grams / 1000;
    let money = kilograms * pricePerKilog;
    console.log(`I need $${money.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruitType}.`)
}
fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)