let { expect } = require("chai");
let rentCar = require("./rentCar");

describe("Tests rentCar", function () {
    describe("Tests searchCar", function () {
        it("valid input ", function () {
            expect(() => rentCar.searchCar("[]", ["saab"]))
                .to.throw("Invalid input!");
        });
        it("no such models ", function () {
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "saab"))
                .to.throw("There are no such models in the catalog!");
        });
        it("find Model ", function () {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Audi"))
                .to.equal("There is 1 car of model Audi in the catalog!");
        });
    });
    describe("Tests calculatePriceOfCar", function () {
        it("valid input ", function () {
            expect(() => rentCar.calculatePriceOfCar(6, "saab"))
                .to.throw("Invalid input!");
        });
        it("cost car Model ", function () {
            expect(rentCar.calculatePriceOfCar("Audi", 2))
                .to.equal("You choose Audi and it will cost $72!");
        });
        it("no such models ", function () {
            expect(() => rentCar.calculatePriceOfCar("saab", 6))
                .to.throw("No such model in the catalog!");
        });
    });
    describe("Tests checkBudget", function () {
        it("valid input ", function () {
            expect(() => rentCar.checkBudget("6", "saab",[]))
                .to.throw("Invalid input!");
        });
        it("rent", function () {
            expect(rentCar.checkBudget(6,3,18))
                .to.equal("You rent a car!");
        });
        it("need", function () {
            expect(rentCar.checkBudget(6,3,12))
                .to.equal("You need a bigger budget!");
        });       
    });
});
