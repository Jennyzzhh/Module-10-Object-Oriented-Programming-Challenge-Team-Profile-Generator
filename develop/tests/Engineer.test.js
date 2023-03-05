const Engineer = require('../lib/engineer')

const newEngineer = new Engineer("Jenny", "1234", "123@email", "jennyzzhh")
describe("Engineer", () => {
    describe("test all properties", () => {
        it("test name", () => {
            expect(newEngineer.name).toEqual("Jenny")
        })
        it("test ID", () => {
            expect(newEngineer.id).toEqual("1234")
        })
        it("test email", () => {
            expect(newEngineer.email).toEqual("123@email")
        })
        it("test github", () => {
            expect(newEngineer.github).toEqual("jennyzzhh")
        })
    })
})