
let { expect } = require("chai");
let numberOperations = require("./03. Number Operations_Resources");

describe("Tests numberOperations", function () {
    describe("Tests  powNumber", function () {
        
        it("price boock", function () {
            expect(numberOperations.powNumber(2))
                .to.equal(4);
        });
        
    });

    describe("Tests numberChecker", function () {
        it("vilid input", function () {
            expect(() => numberOperations.numberChecker('6y'))
                .to.throw('The input is not a number!');
        });
        it("smoll", function () {
            expect(numberOperations.numberChecker(99))
                .to.equal('The number is lower than 100!');
        });
        it("big", function () {
            expect(numberOperations.numberChecker(100))
                .to.equal('The number is greater or equal to 100!');
        });
    });

    describe("Tests sumArrays", function () {
        
        it("arr1>arr2", function () {
            expect( numberOperations.sumArrays([1,2,3,4],[1,2,3]))
                .to.deep.equal([2,4,6,4]);
        });
        it("arr2>arr1", function () {
            expect(numberOperations.sumArrays([5,5,5],[1,1,1,1,1]))
                .to.deep.equal([6,6,6,1,1]);
        });
    });
});