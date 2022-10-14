let { expect } = require("chai");
let rgbToHexColor = require("./RGB to Hex");

describe("Testing RGB ", () => {
    
    it("values of R within the range", () => {
        expect(rgbToHexColor(-6,1,1)).to.be.undefined;
    });
    it("values of G within the range", () => {
        expect(rgbToHexColor(1,-16,1)).to.be.undefined;
    });
    it("values of B within the range", () => {
        expect(rgbToHexColor(6,1,-5)).to.be.undefined;
    });
    it("values of R within the range", () => {
        expect(rgbToHexColor(229,1,1)).to.be.undefined;
    });
    it("values of G within the range", () => {
        expect(rgbToHexColor(1,455,1)).to.be.undefined;
    });
    it("values of B within the range", () => {
        expect(rgbToHexColor(6,1,256)).to.be.undefined;
    });

    it("values of R within the range", () => {
        expect(rgbToHexColor(0,0,0)).to.be.equal('#000000');
    });
    it("values of G within the range", () => {
        expect(rgbToHexColor(255,255,255)).to.be.equal('#FFFFFF');
    });
    it("values of B within the range", () => {
        expect(rgbToHexColor(2,9,5)).to.be.equal("#020905");
    });
});