const Manager = require('../lib/manager')

const newManager = new Manager("Jenny", "1234", "123@email", "666")
describe("Intern", () => {
    describe("test all proerties", () => {
        it("test name", () => {
            expect(newManager.name).toEqual("Jenny")
        })
        it("test ID", () => {
            expect(newManager.id).toEqual("1234")
        })
        it("test email", () => {
            expect(newManager.email).toEqual("123@email")
        })
        it("test school", () => {
            expect(newManager.officenumber).toEqual("666")
        })
    })
})