let { expect } = require("chai");
//const { describe } = require("mocha");
let createCalculator = require("./addSubtract");

describe("Testing function Add Subtract", () => {

    it("add and subtract parsed as a number ", () => {
        let calc = createCalculator();
        calc.add(20);
        calc.subtract(5);
        expect(calc.get()).to.be.equal(15);
    });
    it("add and subtract parsed as a negative number ", () => {
        let calc = createCalculator();

        calc.add(-50);
        calc.subtract(55);
        expect(calc.get()).to.be.equal(-105);
    });
    it("Return a module (object) ", () => {
        let expectedRes = 'object';
        let actualRes = typeof createCalculator();
        expect(expectedRes, actualRes);
    });
    it("parameter that can be parsed as a number ", () => {
        let calc = createCalculator();
        calc.add("-50");
        calc.subtract(55);
        expect(calc.get()).to.be.equal(-105);
    });
    it("parameter that can`t be parsed as a number ", () => {
        let calc = createCalculator();
        calc.add("s");
        calc.subtract(55);
        expect(calc.get()).to.be.NaN;
    });
});

/*Return a module (object), containing the functions add(), subtract() and get() as properties
•	Keep an internal sum that can’t be modified from the outside
•	The functions add() and subtract() take a parameter that can be parsed as a number (either a number or a string containing a number) that is added or subtracted from the internal sum
•	The function get() returns the value of the internal sum
*/