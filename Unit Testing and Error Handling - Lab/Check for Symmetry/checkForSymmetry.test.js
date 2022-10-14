let { expect } = require("chai");
const { describe } = require("mocha");
let isSymmetric= require("./checkForSymmetry");

describe("Testing an array are non-symmetric",()=>{
    it("Take an array as an argument", () => {
        expect(isSymmetric(["a","f","g",'f','f'])).to.be.false;
    });
    it("no symmetric type", () => {
        expect(isSymmetric(["1",2,1])).to.be.false;
    });
    it("no symmetric type", () => {
        expect(isSymmetric(['a','f','r','f','a'])).to.be.true;
    });
    it("symmetric type", () => {
        expect(isSymmetric([4,2,5,5,2,4])).to.be.true;
    });
    it("symmetric type", () => {
        expect(isSymmetric({})).to.be.false;
    });
});