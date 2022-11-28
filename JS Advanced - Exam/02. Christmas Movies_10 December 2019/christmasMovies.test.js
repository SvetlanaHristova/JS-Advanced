let { expect } = require("chai");
const ChristmasMovies = require("./02. Christmas Movies_Resources");
let christmasMovies = require("./02. Christmas Movies_Resources");

describe("Tests Functionality", function () {
    let instance;
    this.beforeEach(() => {
        instance = new ChristmasMovies()
    });

    describe("Tests constructor", function () {
        it("test movieCollection", function () {                // 1/11
            expect(instance.movieCollection)
                .to.deep.equal([]);
        });
        it("test watched", function () {                        //0
            expect(instance.watched)
                .to.deep.equal({});
        });
        it("test actors", function () {
            expect(instance.actors)
                .to.deep.equal([]);
        });
    });
    describe("Tests buyMovie", function () {
        it("test add", function () {                             // 0
            expect(instance.buyMovie("300", ["a", 'b']))
                .to.equal(`You just got 300 to your collection in which a, b are taking part!`);
        });
        it("test error", function () {                           // 3/11
            instance.buyMovie("300", ["a", 'b']);
            expect(() => instance.buyMovie("300", ["a", 'b']))
                .to.throw(`You already own 300 in your collection!`);
        });
    });
    describe("Tests discardMovie", function () {                   // 4/11 5/11
        it("test error: not at your collection", function () {                           // @/11
            expect(() => instance.discardMovie("300", ["a", 'b']))
                .to.throw(`300 is not at your collection!`);
        });
        it("test error:is not watched", function () {
            instance.buyMovie("300", ["a", 'b']);
            expect(() => instance.discardMovie("300"))
                .to.throw(`300 is not watched!`);
        });
        it("test threw movie", function () {
            instance.buyMovie("300", ["a", 'b']);
            instance.watchMovie("300");
            expect(instance.discardMovie("300"))
                .to.equal(`You just threw away 300!`);
        });
    });
    describe("Tests watchMovie", function () {          //6/11 7/11
        
        it("test watch first", function () {       
            instance.buyMovie("300", ["a", 'b']);                   
            instance.watchMovie("300");
            expect(instance.watched["300"])
                .to.deep.equal(1);
        });
        it("test watch next", function () {
            instance.buyMovie("300", ["a", 'b']);  
            instance.watchMovie("300");
            instance.watchMovie("300");
            expect(instance.watched["300"])
                .to.deep.equal(2);
        });
        it("test error:not at your collection", function () {
          
            expect(() => instance.watchMovie("300"))
                .to.throw('No such movie in your collection!');
        });

    });
});
/*
it("...", function () {
    expect(christmasMovies.isGenreSuitable())
        .to.equal(``)
});
it("validation str", function () {
    expect(() => christmasMovies.suitableTitles())
        .throw("");
});
*/