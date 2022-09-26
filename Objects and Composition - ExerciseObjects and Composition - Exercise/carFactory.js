function carFactory(describeCar) {
    let res = {};
    res.model = describeCar.model;
    let engine = {
        "Small engine": { power: 90, volume: 1800 },
        'Normal engine': { power: 120, volume: 2400 },
        'Monster engine': { power: 200, volume: 3500 }
    }
    if (describeCar.power <= 90) {
        res.engine = engine["Small engine"];
    } else if (describeCar.power <= 120) {
        res.engine = engine['Normal engine'];
    } else if (describeCar.power <= 200) {
        res.engine = engine['Monster engine'];
    }
    res.carriage = {
        type: describeCar.carriage,
        color: describeCar.color
    }
    let size = 0
    describeCar.wheelsize % 2 === 0
        ? size = describeCar.wheelsize - 1
        : size = describeCar.wheelsize
    res.wheels = new Array(4).fill(size)

    return res;
}

console.log(carFactory({
    model: 'Ferrari',
    power: 200,
    color: 'red',
    carriage: 'coupe',
    wheelsize: 21
}
));
console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
));