let { expect } = require("chai");
let companyAdministration = require("./companyAdministration");

describe("Tests companyAdministration", function () {
    describe("Tests  hiringEmployee", function () {
        it("vilid  position", function () {
            expect(() => companyAdministration. hiringEmployee("2", "4", 3))
                .to.throw(`We are not looking for workers for this position.`);
        });
        it("successfully", function () {
            expect(companyAdministration. hiringEmployee("a", "Programmer", 7))
                .to.equal(`a was successfully hired for the position Programmer.`);
        });
        it("successfully", function () {
            expect(companyAdministration. hiringEmployee("a", "Programmer", 3))
                .to.equal(`a was successfully hired for the position Programmer.`);
        });
        it("not approved", function () {
            expect(companyAdministration. hiringEmployee("roses", "Programmer", 2))
                .to.equal(`roses is not approved for this position.`);
        });
    });

    describe("Tests calculateSalary", function () {
        it("not a number", function () {
            expect(()=>companyAdministration.calculateSalary("aa"))
                .to.throw("Invalid hours");
        });
        it("negative number", function () {
            expect(()=>companyAdministration.calculateSalary(-9))
                .to.throw("Invalid hours");
        });
        it("Salary", function () {
            expect(companyAdministration.calculateSalary(100))
                .to.equal(1500);
        });
        it("Salary+ bonus", function () {
            expect(companyAdministration.calculateSalary(200))
                .to.equal(4000);
        });
        it("Salary+ bonus", function () {
            expect(companyAdministration.calculateSalary(0))
                .to.equal(0);
        });
    });

    describe("Tests firedEmployee", function () {
        it("vilid index", function () {
            expect(() => companyAdministration.firedEmployee([2], ""))
                .to.throw("Invalid input");
        });
        it("vilid is array", function () {
            expect(() => companyAdministration.firedEmployee("[2]", 2))
                .to.throw("Invalid input");
        });
        it("vilid input < 0", function () {
            expect(() => companyAdministration.firedEmployee(["Rose", "Lily", "Orchid"],-1))
                .to.throw("Invalid input");
        });
        it("vilid input big index", function () {
            expect(() => companyAdministration.firedEmployee(["Rose", "Lily", "Orchid"], 3))
                .to.throw("Invalid input");
        });
        it("list ", function () {
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1))
                .to.equal("Petar, George");
        });
    });
});