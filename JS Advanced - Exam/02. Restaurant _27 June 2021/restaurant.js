class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }
    loadProducts(arr) {
        for (let element of arr) {
            let [productName, productQuantity, productTotalPrice] = element.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);
            if (this.budgetMoney >= productTotalPrice) {
                if (this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] += productQuantity;
                    this.budgetMoney -= productTotalPrice;
                } else {
                    this.stockProducts[productName] = Number(productQuantity);
                    this.budgetMoney -= productTotalPrice;
                }
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }
        return this.history.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (this.menu.hasOwnProperty() == meal) {
            return `The ${meal} is already in the our menu, try something different`;
        }
        this.menu[meal] = { "products": neededProducts, "price": Number(price) };
        return Object.keys(this.menu).length == 1 ?
            `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            : `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
    }

    showTheMenu() {
        if (Object.keys(this.menu).length == 0) {
            return "Our menu is not ready yet, please come later...";
        }
        let res = [];
        for (let el in this.menu) {
            res.push(`${el} - $ ${this.menu[el].price}`);
        }
        return res.join('\n');
    }

    makeTheOrder(meal) {
        if (Object.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }

        for (let element of this.menu[meal].products) {
            let [productName, productQuantity] = element.split(' ');
            if (!this.stockProducts.hasOwnProperty(productName) ||
                this.stockProducts[productName] < Number(productQuantity)) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }
        for (let element of this.menu[meal].products) {
            let [productName, productQuantity] = element.split(' ');
            this.stockProducts[productName] -= Number(productQuantity);
        }
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
    }
}
/*
let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
*/
/*
let kitchen = new Restaurant(1000);
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
*/
/*
let kitchen = new Restaurant(1000);
console.log(kitchen.showTheMenu());
*/
/*
let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
*/
// Testing makeTheOrder

let test = new Restaurant(1000);
console.log(test.loadProducts(['Yogurt 3 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']));
console.log(test.addToMenu('frozenYogurt', ['Yogurt 4', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(test.makeTheOrder('frozenYogurt'));
