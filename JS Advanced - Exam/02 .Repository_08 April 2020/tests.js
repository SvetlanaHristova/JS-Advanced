let { Repository } = require("./solution.js");
let { expect } = require("chai");

describe("Tests Repository", function () {
    let obj = {};
    beforeEach(             //Mocha Hooks
        () =>
        (obj = new Repository({
            name: "string",
            age: "number",
            birthday: "object",
        }))
    );

    describe("test count", function () {
        it("start", function () {
            expect(obj.count).to.equal(0)
        });
    });

    describe("test add", function () {
        it("validation obj", function () {
            expect(obj.add({ name: "Pesho", age: 22, birthday: new Date(1998, 0, 7) }))
                .to.equal(0)
        });
        it("validation obj: missing property ", function () {
            expect(() => obj.add({ age: 22, birthday: new Date(1998, 0, 7) }))
                .to.throw("Property name is missing from the entity!")
        });
        it("validation obj:incorrect type property ", function () {
            expect(() => obj.add({ name: "Pesho", age: "22", birthday: new Date(1998, 0, 7) }))
                .to.throw("Property age is not of correct type!")
        });
    });

    describe("test getId", function () {
        it("id not exist", function () {
            expect(() => obj.getId(1))
                .to.throw(`Entity with id: 1 does not exist!`)
        });
    });
    describe("test  update", function () {
        it("id not exist", function () {
            expect(() => obj.update(1, {}))
                .to.throw(`Entity with id: 1 does not exist!`)
        });
        it("id exist validation 1", function () {
            obj.add({ name: "", age: 0, birthday: {} });
            expect(() => obj.update(0, { age: 0, birthday: {} }))
                .to.throw("Property name is missing from the entity!")
        });
        it("id exist validation 2", function () {
            obj.add({ name: "", age: 1, birthday: {} });
            expect(() => obj.update(0, { name: "", age: "1", birthday: {} }))
                .to.throw("Property age is not of correct type!")
        });
    });
    describe("test  del", function () {
        it("id exist", function () {
            obj.add({ name: "", age: 1, birthday: {} });
            obj.add({ name: "", age: 1, birthday: {} });
            obj.del(1);
            expect(obj.data.has(1)).to.equal(false);
        });
        it("id not exist", function () {
            expect(() => obj.del(5))
                .to.throw(`Entity with id: 5 does not exist!`)
        });
    });
});
