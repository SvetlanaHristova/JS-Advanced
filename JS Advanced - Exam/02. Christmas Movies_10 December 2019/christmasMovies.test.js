let { expect } = require("chai");
let ChristmasMovies = require("./02. Christmas Movies_Resources"); //100/100

describe("Tests Functionality", function () {
    let instance;
    this.beforeEach(() => {
        instance = new ChristmasMovies();
    });
    describe("Tests buyMovie", function () {
        it("test add", function () {
            expect(instance.buyMovie("300", ["a", 'b', "b"]))
                .to.equal(`You just got 300 to your collection in which a, b are taking part!`);
        });
        it("test error", function () {
            instance.buyMovie("300", ["a", "b"]);
            expect(() => instance.buyMovie("300", ["a", "b"]))
                .to.throw(`You already own 300 in your collection!`);
        });
    });
    describe("Tests discardMovie", function () {
        it("test error: not at your collection", function () {
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
    describe("Tests watchMovie", function () {

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
    describe("Tests favouriteMovie", function () {
        it("test 3 favorite movie", function () {
            instance.buyMovie("300", ["a", 'b']);
            instance.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
            instance.watchMovie("300");
            instance.watchMovie("300");
            instance.watchMovie('Last Christmas');
            expect(instance.favouriteMovie())
                .to.equal(`Your favourite movie is 300 and you have watched it 2 times!`);
        });
        it("test error: no favorite movie", function () {
            expect(() => instance.favouriteMovie("300", ["a", 'b']))
                .to.throw('You have not watched a movie yet this year!');
        });
    });
    describe("Tests mostStarredActor", function () {
        it("test  favorite actor", function () {
            instance.buyMovie("300", ["a", 'b']);
            instance.buyMovie('Last Christmas', ['a', 'Henry Golding']);
            expect(instance.mostStarredActor())
                .to.equal(`The most starred actor is a and starred in 2 movies!`);
        });
        it("test error: no actor", function () {
            expect(() => instance.mostStarredActor())
                .to.throw('You have not watched a movie yet this year!');
        });
    });

});
