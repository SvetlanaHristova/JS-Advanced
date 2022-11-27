let { expect } = require("chai");
let flowerShop = require("./flowerShop");

describe("Tests flowerShop", function () {
    describe("Tests calcPriceOfFlowers", function () {
        it("vilid input", function () {
            expect(() => flowerShop.calcPriceOfFlowers(2, "", ""))
                .to.throw("Invalid input");
        });
        it("buy flowers", function () {
            expect(flowerShop.calcPriceOfFlowers("roses", 2, 7))
                .to.equal(`You need $14.00 to buy roses!`);
        });
    });

    describe("Tests checkFlowersAvailable", function () {
        it("have flower", function () {
            expect(flowerShop.checkFlowersAvailable("Rose",["Rose", "Lily", "Orchid"]))
                .to.equal(`The Rose are available!`);
        });
        it("no flower", function () {
            expect(flowerShop.checkFlowersAvailable("Rose",[ "Lily", "Orchid"]))
                .to.equal(`The Rose are sold! You need to purchase more!`);
        });
    });

    describe("Tests sellFlowers", function () {
        it("vilid input", function () {
            expect(() => flowerShop.sellFlowers(2, ""))
                .to.throw("Invalid input");
        });
        it("vilid input < 0", function () {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],-14))
                .to.throw("Invalid input");
        });
        it("vilid input big count", function () {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 3))
                .to.throw("Invalid input");
        });
        it("list of flowers ", function () {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1))
                .to.equal("Rose / Orchid");
        });
    });
});