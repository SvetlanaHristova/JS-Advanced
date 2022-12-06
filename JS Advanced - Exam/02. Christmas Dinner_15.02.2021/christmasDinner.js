class ChristmasDinner {
    constructor(budget) {
        if (budget < 0) {
            throw new Error("The budget cannot be a negative number");
        }
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }
    shopping(product) {
        let [type, price] = product;
        if (price > this.budget) {
            throw new Error("Not enough money to buy this product");
        }
        this.products.push(type);
        this.budget -= price;
        return `You have successfully bought ${type}!`;
    }

    recipes(recipe) {
        for (let el of recipe.productsList) {
            if (!this.products.includes(el)) {
                throw new Error("We do not have this product");
            }
        }
        this.dishes.push({ 'recipeName': recipe.recipeName, 'productsList': recipe.productsList });
        return `${recipe.recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        if (!this.dishes.find(x => x.recipeName == dish)) {
            throw new Error("We do not have this dish");
        }
        if (this.guests[name]) {
            throw new Error("This guest has already been invited");
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let res = [];
        for (let el in this.guests) {
            let dish = this.guests[el];
            let product = this.dishes.find(x => x.recipeName == dish).productsList;
            res.push(`${el} will eat ${dish}, which consists of ${product.join(", ")}`);
        }
        return res.join('\n');
    }

}
let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
