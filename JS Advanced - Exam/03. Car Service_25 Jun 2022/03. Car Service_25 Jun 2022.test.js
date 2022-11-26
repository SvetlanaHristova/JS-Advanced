let { expect } = require("chai");
let carService = require("./03. Car Service_Resources");

describe("Tests carService", function () {
    describe("tests isItExpensive", function () {

        it("is Engine", function () {
            expect(carService.isItExpensive("Engine"))
                .to.equal(`The issue with the car is more severe and it will cost more money`);
        });
        it("is Transmission", function () {
            expect(carService.isItExpensive("Transmission"))
                .to.equal(`The issue with the car is more severe and it will cost more money`);
        });
        it("is cheaper", function () {
            expect(carService.isItExpensive("button"))
                .to.equal(`The overall price will be a bit cheaper`);
        });

    });

    describe("tests discount", function () {

        it("vilid input1", function () {
            expect(() => carService.discount(2, ""))
                .to.throw("Invalid input");
        });
        it("vilid input2", function () {
            expect(() => carService.discount("", 2))
                .to.throw("Invalid input");
        });
        it("no discount", function () {
            expect(carService.discount(2, 7))
                .to.equal("You cannot apply a discount");
        });

        it("discount 15%", function () {
            expect(carService.discount(3, 100))
                .to.equal(`Discount applied! You saved 15$`);
        });
        it("discount 30%", function () {
            expect(carService.discount(8, 100))
                .to.equal(`Discount applied! You saved 30$`);
        });
    });
    describe("tests partsToBuy", function () {

        it("vilid input 1", function () {
            expect(()=>carService.partsToBuy("e",[]))
                .to.throw("Invalid input");
        });
        it("vilid input 2", function () {
            expect(()=>carService.partsToBuy([2],'5'))
                .to.throw("Invalid input");
        });
        it(" total price for 2", function () {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],["blowoff valve","coil springs"]))
                .to.equal(375);
        });
        it(" total price for 3", function () {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }, { part: "injectors", price: 100 }],["blowoff valve","coil springs","injectors"]))
                .to.equal(475);
        });
    });

});

