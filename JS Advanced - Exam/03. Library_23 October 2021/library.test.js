let { expect } = require("chai");
let library = require("./library");

describe("Tests library", function () {
    describe("Tests  calcPriceOfBook", function () {
        it("vilid input 1", function () {
            expect(() => library. calcPriceOfBook(2, ""))
                .to.throw("Invalid input");
        });
        it("vilid input 2", function () {
            expect(() => library. calcPriceOfBook("LoL", 2000.5))
                .to.throw("Invalid input");
        });
        it("vilid input 2", function () {
            expect(() => library. calcPriceOfBook({}, 1869))
                .to.throw("Invalid input");
        });
        it("price boock", function () {
            expect(library. calcPriceOfBook("BoockName", 2000))
                .to.equal(`Price of BoockName is 20.00`);
        });
        it("price boock", function () {
            expect(library. calcPriceOfBook("BoockName", 1979))
                .to.equal(`Price of BoockName is 10.00`);
        });
        it("price old boock", function () {
            expect(library. calcPriceOfBook("BoockName", 1980))
                .to.equal(`Price of BoockName is 10.00`);
        });
    });

    describe("Tests findBook", function () {
        it("vilid input", function () {
            expect(() => library.findBook([],"lol"))
                .to.throw("No books currently available");
        });
        it("have book", function () {
            expect(library.findBook(["Troy", "Life Style", "Torronto"],"Troy"))
                .to.equal("We found the book you want.");
        });
        it("no book", function () {
            expect(library.findBook(["Troy", "Life Style", "Torronto"],"One"))
                .to.equal("The book you are looking for is not here!");
        });
    });

    describe("Tests arrangeTheBooks", function () {
        it("vilid input", function () {
            expect(() => library.arrangeTheBooks("a"))
                .to.throw("Invalid input");
        });
        it("vilid input negative count", function () {
            expect(() => library.arrangeTheBooks(-14))
                .to.throw("Invalid input");
        });
        it(" all the books are arranged ", function () {
            expect( library.arrangeTheBooks(40))
                .to.equal("Great job, the books are arranged.");
        });
        it("no space has been reached, ", function () {
            expect(library.arrangeTheBooks(41))
                .to.equal("Insufficient space, more shelves need to be purchased.");
        });
    });
});