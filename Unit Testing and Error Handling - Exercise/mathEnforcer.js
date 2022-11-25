let { expect } = require('chai');

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};
describe('testing mathEnforcer', () => {
    it('should be undefined with addFive', () => {
        expect(mathEnforcer.addFive("55")).to.be.undefined;
    });
    it('should be undefined with subtractTen', () => {
        expect(mathEnforcer.subtractTen(['d'])).to.be.undefined;
    });
    it('should be be undefined with num1 sum', () => {
        expect(mathEnforcer.sum("d",5)).to.be.undefined;
    });
    it('should be be undefined with num2 sum', () => {
        expect(mathEnforcer.sum(5,'r')).to.be.undefined;
    });
      it('should be positive addFive', () => {
        expect(mathEnforcer.addFive(5)).to.equal(10);
    });
    it('should be positive with subtractTen', () => {
        expect(mathEnforcer.subtractTen(30)).to.equal(20);
    });
    it('should be be positive with sum', () => {
        expect(mathEnforcer.sum(10,5)).to.be.equal(15);
    });
    it('should be negative addFive', () => {
        expect(mathEnforcer.addFive(-15)).to.equal(-10);
    });
    it('should be negative with subtractTen', () => {
        expect(mathEnforcer.subtractTen(-30)).to.equal(-40);
    });
    it('should be be negative with sum', () => {
        expect(mathEnforcer.sum(-10,5)).to.be.equal(-5);
    });
    it('should be be floating-point numbers with sum', () => {
        expect(mathEnforcer.sum(10.2,4.5)).to.be.equal(14.7);
    });
    it('should be floating-point numbers with addFive', () => {
        expect(mathEnforcer.addFive(5.2)).to.equal(10.2);
    });
    it('should be floating-point numbers with subtractTen', () => {
        expect(mathEnforcer.subtractTen(30.6)).to.equal(20.6);
    });
    
})