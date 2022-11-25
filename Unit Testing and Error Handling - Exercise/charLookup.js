let { expect } = require('chai');

function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }
    return string.charAt(index);
}

describe('testing lookupChar ', () => {
    it('should be undefined,incorect string ', () => {
        expect(lookupChar(0, 0)).to.be.undefined;
    });
    it('should be undefined,incorect index', () => {
        expect(lookupChar("string", "test")).to.be.undefined;
    });
    it('should be undefined, index floating-point number', () => {
        expect(lookupChar("string", 2.3)).to.be.undefined;
    });
    it('should be Incorrect index,outside of the bounds ', () => {
        expect(lookupChar("string", 7)).to.equal("Incorrect index");
    });
    it('should be Incorrect index, negative index', () => {
        expect(lookupChar("string", -7)).to.equal("Incorrect index");
    });
    it('should be correct', () => {
        expect(lookupChar("string", 1)).to.equal("t"); //странно но с индех 0=>"t" джъдж дава грешка 
    });
})
