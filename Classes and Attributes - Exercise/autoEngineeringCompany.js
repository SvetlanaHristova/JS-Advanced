function autoEngineeringCompany(arr) {
    let carRegister = {};
    for (let element of arr) {
        let [carBrand, carModel, producedCars] = element.split(' | ');
        if (!carRegister.hasOwnProperty(carBrand)) {
            carRegister[carBrand] = {}
        }
        carRegister[carBrand].hasOwnProperty(carModel) ?
            carRegister[carBrand][carModel] += Number(producedCars)
            : carRegister[carBrand][carModel] = Number(producedCars);
    }
    for (let el in carRegister) {
        console.log(el);
        Object.entries(carRegister[el]).forEach(x => {
            console.log(`###${x[0]} -> ${x[1]}`)
        });
    }
}
autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'])
