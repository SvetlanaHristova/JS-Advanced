let { expect } = require("chai");
let testNumbers = require("./testNumbers");

describe("Tests testNumbers", function () {
    describe("Tests sumNumbers", function () {

        it("parameters are numbers", function () {
            expect(testNumbers.sumNumbers("num1", "num2"))
                .to.be.undefined;
        });
        it("sum", function () {
            expect(testNumbers.sumNumbers(3, 22))
                .to.equal("25.00")
        });
    });

    describe("Tests numberChecker", function () {

        it("validation", function () {
            expect(() => testNumbers.numberChecker("as"))
                .throw('The input is not a number!');
        });
        it("even", function () {
            expect(testNumbers.numberChecker(6))
                .to.equal('The number is even!');
        });
        it("odd", function () {
            expect(testNumbers.numberChecker(5))
                .to.equal('The number is odd!');
        });

    });

    describe("Tests averageSumArray", function () {
        it("solve", function () {
            expect(testNumbers.averageSumArray([3, 2, 1]))
                .to.equal(2);
        });
    });
});