let { expect } = require("chai");
let cinema = require("./cinema");

describe("Tests cinema", function () {
    describe("tests  showMovies", function () {

        it("no movie", function () {
            expect(cinema.showMovies([]))
                .to.equal("There are currently no movies to show.");
        });
        it("list movie", function () {
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker']))
                .to.equal('King Kong, The Tomorrow War, Joker');
        });

    });

    describe("tests ticketPrice", function () {

        it("no in the schedule", function () {
            expect(() => cinema.ticketPrice(""))
                .to.throw("Invalid projection type.");
        });
        it("present in the schedule 3", function () {
            expect(cinema.ticketPrice("Discount"))
                .to.equal(5.50);
        });
        it("present in the schedule 2", function () {
            expect(cinema.ticketPrice("Normal"))
                .to.equal(7.50);
        });
        it("present in the schedule 1", function () {
            expect(cinema.ticketPrice("Premiere"))
                .to.equal(12.00);
        });
    });

    describe("tests swapSeatsInHall", function () {
        it("not second num", function () {
            expect(cinema.swapSeatsInHall(7))
                .to.equal("Unsuccessful change of seats in the hall.");
        });
        it("not integers 1", function () {
            expect(cinema.swapSeatsInHall("e", 7))
                .to.equal("Unsuccessful change of seats in the hall.");
        });
        it("not integers 2", function () {
            expect(cinema.swapSeatsInHall(5, 'm'))
                .to.equal("Unsuccessful change of seats in the hall.");
        });       
        it("greater than the capacity-1 ", function () {
            expect(cinema.swapSeatsInHall(4, 22))
                .to.equal("Unsuccessful change of seats in the hall.");
        });
        it("greater than the capacity-2 ", function () {
            expect(cinema.swapSeatsInHall(42, 2))
                .to.equal("Unsuccessful change of seats in the hall.");
        });
        it("less or equal of 0-1", function () {
            expect(cinema.swapSeatsInHall(-5, 15))
                .to.equal("Unsuccessful change of seats in the hall.");
        });
        it("less or equal of 0-2", function () {
            expect(cinema.swapSeatsInHall(5, -15))
                .to.equal("Unsuccessful change of seats in the hall.");
        });
        it("less or equal of 0-1", function () {
            expect(cinema.swapSeatsInHall(5, 0))
                .to.equal("Unsuccessful change of seats in the hall.");
        });
        it("less or equal of 0-2", function () {
            expect(cinema.swapSeatsInHall(0, 5))
                .to.equal("Unsuccessful change of seats in the hall.");
        });
        it("same", function () {
            expect(cinema.swapSeatsInHall(3, 3))
                .to.equal("Unsuccessful change of seats in the hall.");
        });
        it("Successful change 1", function () {
            expect(cinema.swapSeatsInHall(20, 1))
                .to.equal("Successful change of seats in the hall.");
        });
        it("Successful change 2", function () {
            expect(cinema.swapSeatsInHall(14, 20))
                .to.equal("Successful change of seats in the hall.");
        });
    });

});
