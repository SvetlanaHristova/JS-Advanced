function cookingByNumbers(inputNmber, ...list) {

    let result = Number(inputNmber);

    let operation = {
        chop: x => x / 2,
        dice: x => Math.sqrt(x),
        spice: x => x + 1,
        bake: x => x * 3,
        fillet: x => x * 0.8
    };

    list.forEach(command => {
        result = operation[command](result);
        console.log(result);
    });
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
