class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }
    addCar(model, horsepower, price, mileage) {
 
        if (model == "" || horsepower <0 || mileage < 0
            || parseInt(horsepower) !== horsepower || price <0) {
            throw new Error("Invalid input!");
        } else {
            this.availableCars.push({ model, horsepower, price, mileage });
            return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
        }
    }

    sellCar(model, desiredMileage) {
        let car = this.availableCars.find(x => x.model == model);
        if (!car) {
            throw new Error(`${model} was not found!`);
        } 
        if (car.mileage > desiredMileage) {
            if (car.mileage - desiredMileage <= 40000) {
                car.price = car.price * 0.95;
            } else {
                car.price = car.price * 0.90;
            }
        }
        this.soldCars.push({ model: car.model, horsepower: car.horsepower, soldPrice: car.price });
        this.totalIncome += car.price;
        this.availableCars = this.availableCars.filter(x => x.name != model);
        return `${model} was sold for ${car.price.toFixed(2)}$`;
    }

    currentCar() {
        if (this.availableCars.length == 0) {
            return "There are no available cars";
        } else {
            let res = [];
            this.availableCars.forEach(x => res.push(`---${x.model} - ${x.horsepower} HP - ${x.mileage.toFixed(2)} km - ${x.price.toFixed(2)}$`));
            return `-Available cars:\n${res.join('\n')}`;
        }
    }

    salesReport(criteria) {
        if (criteria != "horsepower" && criteria != "model") {
            throw new Error("Invalid criteria!");
        }
        criteria == "horsepower" ?
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower)
            : this.soldCars.sort((a, b) => (a.model).localeCompare(b.model));
        let res = [];
        this.soldCars.map(x => res.push(`---${x.model} - ${x.horsepower} HP - ${x.soldPrice.toFixed(2)}$`));
        return `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n-${res.length} cars sold:\n${res.join('\n')}`;

    }
}

/*
let dealership = new CarDealership('SoftAuto');
console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
console.log(dealership.addCar('', 120, 4900, 240000));
*/
/*
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
console.log(this.availableCars)
console.log(dealership.sellCar('Toyota Corolla', 230000));
console.log(dealership.sellCar('Mercedes C63', 110000));
*/
/*
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
console.log(dealership.currentCar());
*/

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));

