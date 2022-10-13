let { expect } = require("chai");
let sum = require("./Sum of Numbers");

describe("Testing sum of Numbers", () => {
    
    it("return 0 with empty arr", () => {
        expect(sum([])).to.be.equal(0);
    });
    it("return NaN with string element", () => {
        expect(sum([1,"s"])).to.be.NaN;
    });
    it("return sum with corect arr", () => {
        expect(sum([1,2,50])).to.be.equal(53);
    });
    it("return corect sum with negative elements", () => {
        expect(sum([-2,8,-12])).to.be.equal(-6);
    });
    it("one element", () => {
        expect(sum([4])).to.be.equal(4);
    });
    it("return sum with corect arr", () => {
        expect(sum("[1,2,3,4,5,6]")).to.be.NaN;
    });
   
});