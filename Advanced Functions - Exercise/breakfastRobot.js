function solution() {
    let store = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    let recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }
    let instructions = {
        restock: (microelemen, quantity) => {
            store[microelemen] += quantity;
            return "Success";
        },
        prepare: (recipe, amount) => {

            for (let microelement in recipes[recipe]) {
                if (store[microelement] < recipes[recipe][microelement] * amount) {
                    return `Error: not enough ${microelement} in stock`
                } else {
                    store[microelement] -= recipes[recipe][microelement] * amount
                }
            }
            return "Success";
        },
        report: () => {
            let arr = [];

            for (let el in store) {
                arr.push(`${el}=${store[el]}`)
            }
            return arr.join(" ");
        }
    }

    return function hendler(str) {
        let [command, recipe, quantity] = str.split(' ');
        quantity = Number(quantity);
        return instructions[command](recipe, quantity);
    }
}

let manager = solution();
/*console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock */

console.log(manager('prepare turkey 1'));//'Error: not enough protein in stock'
console.log(manager('restock protein 10'));//'Success'
console.log(manager('prepare turkey 1'));//'Error: not enough carbohydrate in stock
console.log(manager('restock carbohydrate 10'));//'Success'
console.log(manager('prepare turkey 1'));//'Error: not enough fat in stock'
console.log(manager('restock fat 10'));//'Success'
console.log(manager('prepare turkey 1'));//'Error: not enough flavour in stock'
console.log(manager('restock flavour 10'));//'Success'
console.log(manager('prepare turkey 1'));//'Success'
console.log(manager('report'));//'protein=0 carbohydrate=0 fat=0 flavour=0'

