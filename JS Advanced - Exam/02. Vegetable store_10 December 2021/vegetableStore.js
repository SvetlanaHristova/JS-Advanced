class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let res = [];
        for (let element of vegetables) {
            let [type, quantity, price] = element.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            let product = this.availableProducts.find(x => x.type == type);
            if (!product) {
                this.availableProducts.push({ type, quantity, price });
                res.push(type);
            } else {
                product.quantity += quantity;
                if (product.price < price) {
                    product.price = price;
                }
            }
        }
        return `Successfully added ${res.join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        for (let element of selectedProducts) {
            let [type, quantity] = element.split(' ');
            quantity = Number(quantity);
            let product = this.availableProducts.find(x => x.type == type);
            if (!product) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }
            if (product.quantity < quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }
            totalPrice += product.price * quantity;
            product.quantity -= quantity;
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable(type, quantity) {
        let product = this.availableProducts.find(x => x.type == type);
        if (!product) {
            throw new Error(`${type} is not available in the store.`);
        }
        if (product.quantity <= quantity) {
            product.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        } else {
            product.quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`;
        }
    }

    revision() {
        let res = [];
        this.availableProducts
            .sort((a, b) => a.price - b.price)
            .map(x => res.push(`${x.type}-${x.quantity}-$${x.price}`));

        return `Available vegetables:\n${res.join('\n')}\nThe owner of the store is ${this.owner}, and the location is ${this.location}.`;
    }
}
/*
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
*/
/*
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.buyingVegetables(["Okra 1"]));
console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));
*/
/*
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
*/
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
