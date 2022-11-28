let { expect } = require("chai");
let dealership = require("./dealership");


describe("Tests dealership", function () {
    describe("tests newCarCost", function () {

        it("no car", function () {
            expect(dealership.newCarCost('Audi A6 4K', 30000))
                .to.equal(10000);
        });
        it("have car", function () {
            expect(dealership.newCarCost('Audi B6 4K', 30000))
                .to.equal(30000);
        });
    });

    describe("tests carEquipment", function () {

        it("list cars", function () {
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0, 2]))
                .to.deep.equal(['heated seats', 'sport rims']);
        });

    });

    describe("tests euroCategory", function () {

        it("eco category", function () {
            expect(dealership.euroCategory(7))
                .to.equal(`We have added 5% discount to the final price: 14250.`);
        });
        it("eco category", function () {

            expect(dealership.euroCategory(4))
                .to.equal(`We have added 5% discount to the final price: 14250.`);
        });
        it("less eco category", function () {
            expect(dealership.euroCategory(3))
                .to.equal('Your euro category is low, so there is no discount from the final price!');
        });
    });

});