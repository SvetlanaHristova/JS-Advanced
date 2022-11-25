let { expect } = require('chai');

describe('testing isOddOrEven ', () => {
    it('should be undefined if number', () => {
        expect(isOddOrEven(55)).to.be.undefined;
    });
    it('should be undefined if array', () => {
        expect(isOddOrEven(['d'])).to.be.undefined;
    });
    it('should be odd if string is odd', () => {
        expect(isOddOrEven('4sdf3')).to.equal("odd");
    });
    it('should be even if string is even', () => {
        expect(isOddOrEven('sdf3')).to.equal("even");
    });
})