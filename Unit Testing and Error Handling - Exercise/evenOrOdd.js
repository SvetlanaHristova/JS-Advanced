let { expect } = require('chai');

function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('testing isOddOrEven ', () => {
    it('should be undefined if number', () => {
        expect(isOddOrEven(55)).to.be.undefined;
    });
    it('should be undefined if array', () => {
        expect(isOddOrEven(['d'])).to.be.undefined;
    });
    it('should be undefined if odd', () => {
        expect(isOddOrEven('4sdf3')).to.equal("odd");
    });
    it('should be undefined if even', () => {
        expect(isOddOrEven('sdf3')).to.equal("even");
    });
})
