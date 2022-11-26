let { expect } = require("chai");
let bookSelection = require("./bookSelection");

describe("Tests bookSelection", function () {
    describe("Tests isGenreSuitable", function () {

        it("not suitable for kids", function () {
            expect(bookSelection.isGenreSuitable("Thriller", 6))
                .to.equal(`Books with Thriller genre are not suitable for kids at 6 age`)
        });
        it("suitable", function () {
            expect(bookSelection.isGenreSuitable("Horror", 22))
                .to.equal(`Those books are suitable`)
        });
    });

    describe("Tests isItAffordable", function () {

        it("validation", function () {
            expect(() => bookSelection.isItAffordable("as", "vfe"))
                .throw("Invalid input");
        });
        it("+", function () {
            expect(bookSelection.isItAffordable(6, 8))
                .to.equal(`Book bought. You have 2$ left`);
        });
        it("-", function () {
            expect(bookSelection.isItAffordable(8, 6))
                .to.equal("You don't have enough money");
        });

    });

    describe("Tests suitableTitles", function () {
        it("validation arr", function () {
            expect(() => bookSelection.suitableTitles({title: "T", genre: "Th"}, "Thriller"))
                .throw("Invalid input");
        });
        it("validation str", function () {
            expect(() => bookSelection.suitableTitles([{ title: "T", genre: "Th" }], []))
                .throw("Invalid input");
        });
        it("bookList", function () {
            expect(bookSelection.suitableTitles([{ title: "a", genre: "Thriller" },{ title: "b", genre: "Thriller" } ], "Thriller"))
                .to.deep.equal(["a","b"]);
        });
        it("bookList empty", function () {
            expect(bookSelection.suitableTitles([{ title: "a", genre: "Thriller" },{ title: "b", genre: "Thriller" } ], "Horror"))
                .to.be.empty;
        });
    });
});
