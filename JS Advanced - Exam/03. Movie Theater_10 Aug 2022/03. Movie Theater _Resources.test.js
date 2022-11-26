let { expect } = require("chai");
let movieTheater = require("./03. Movie Theater _Resources");

describe("Tests MovieTheater", function () {
    describe("Tests ageRestrictions", function () {
        it("test G", function () {
            expect(movieTheater.ageRestrictions("G"))
            .to.equal("All ages admitted to watch the movie");
        });
        it("test PG", function () {
            expect(movieTheater.ageRestrictions("PG"))
            .to.equal("Parental guidance suggested! Some material may not be suitable for pre-teenagers");
        });
        it("test R", function () {
            expect(movieTheater.ageRestrictions("R"))
            .to.equal("Restricted! Under 17 requires accompanying parent or adult guardian");
        });
        it("test NC-17", function () {
            expect(movieTheater.ageRestrictions("NC-17"))
            .to.equal("No one under 17 admitted to watch the movie");
        });
        it("test G", function () {
            expect(movieTheater.ageRestrictions("..."))
            .to.equal("There are no age restrictions for this movie");
        });
    });

    describe("Tests moneySpent", function () {

        it("valid input 1", function () {
            expect(() => movieTheater.moneySpent("num", ["Nachos", "Popcorn"], ["Soda", "Water"])).to.throw('Invalid input');
        });
        it("valid input 2", function () {
            expect(() => movieTheater.moneySpent(2, "array",["Soda", "Water"])).to.throw('Invalid input');
        });
        it("valid input 3", function () {
            expect(() => movieTheater.moneySpent(3, ["Nachos", "Popcorn"], "array")).to.throw('Invalid input');
        });
        
        it("no purchase", function () {
            expect(movieTheater.moneySpent(2, ["Nachos", "Popcorn"], ["Soda", "Water"]))
            .to.equal(`The total cost for the purchase is 44.50`);
        });
        it("with purchase", function () {
            expect(movieTheater.moneySpent(3, ["Nachos", "Popcorn"], ["Soda", "Water"]))
            .to.equal(`The total cost for the purchase with applied discount is 47.60`);
        });
    });
    describe("Tests reservation", function () {
        it("valid input", function () {
            expect(() => movieTheater.reservation("num", "array")).to.throw('Invalid input');
        });
        it("with purchase", function () {
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 2 }, { rowNumber: 2, freeSeats: 2 }], 2))
                .to.equal(2);
        });

    });

});
