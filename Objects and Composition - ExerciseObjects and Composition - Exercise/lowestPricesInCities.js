function lowestPricesInCities(arr) {
    let obj = {};
    arr.map(element => {
        let [townName, productName, productPrice] = element.split(' | ');
        productPrice = Number(productPrice);
        if (obj.hasOwnProperty(productName)) {
            if (obj[productName]['productPrice'] > productPrice) {
                obj[productName] = { townName, productPrice };
            }
        } else {
            obj[productName] = { townName, productPrice };
        }

    });
    Object.entries(obj)
        .forEach(el => {
            console.log(`${el[0]} -> ${el[1].productPrice} (${el[1].townName})`);
        });
}
lowestPricesInCities(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000']);
lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);