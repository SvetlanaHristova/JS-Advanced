class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw "Not enough space in the garden.";
        } else {
            this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
            this.spaceAvailable -= spaceRequired;
            return `The ${plantName} has been successfully planted in the garden.`;
        }
    }

    ripenPlant(plantName, quantity) {
        let plant = this.plants.find(x => x.plantName == plantName);
        if (!plant) {
            throw `There is no ${plantName} in the garden.`;
        }
        if (plant.ripe) {
            throw `The ${plantName} is already ripe.`;
        }
        if (quantity <= 0) {
            throw "The quantity cannot be zero or negative.";
        }
        plant.ripe = true;
        plant.quantity += Number(quantity);
        return plant.quantity == 1 ?
            `1 ${plantName} has successfully ripened.`
            : `${quantity} ${plantName}s have successfully ripened.`;
    }

    harvestPlant(plantName) {
        let plant = this.plants.find(x => x.plantName == plantName);
        if (!plant) {
            throw `There is no ${plantName} in the garden.`;
        }
        if (!plant.ripe) {
            throw `The ${plantName} cannot be harvested before it is ripe.`;
        }

        this.storage.push(plant);
        this.spaceAvailable += plant.spaceRequired;
        this.plants = this.plants.filter(x => x.plantName != plantName);
        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let res = [];
        res.push(`The garden has ${this.spaceAvailable} free space left.`);
        let names = [];
        this.plants.forEach(x => names.push(x.plantName));
        names.sort(((a, b) => a.localeCompare(b)));
        res.push(`Plants in the garden: ${names.join(', ')}`);
        if (this.storage.length == 0) {
            res.push("Plants in storage: The storage is empty.");
        } else {
            let nameQuality = [];
            this.storage.forEach(x => nameQuality.push(`${x.plantName} (${x.quantity})`));
            res.push(`Plants in storage: ${nameQuality.join(', ')}`);
        }
        return res.join('\n');
    }
}
/*
const myGarden = new Garden(250)f
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('olive', 50));
*/
/*
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 100));
console.log(myGarden.addPlant('cucumber', 30));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.ripenPlant('orange', 4));
*/
/*
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 100));
console.log(myGarden.addPlant('cucumber', 30));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.ripenPlant('olive', 30));
*/
/*
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 100));
console.log(myGarden.addPlant('cucumber', 30));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.ripenPlant('cucumber', -5));
*/
/*
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('apple'));
console.log(myGarden.harvestPlant('olive'));
*/

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('apple'));
//console.log(myGarden.harvestPlant('raspberry'));
console.log(myGarden.generateReport())
