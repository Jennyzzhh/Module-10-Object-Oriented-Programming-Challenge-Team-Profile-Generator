const Intern = require('../lib/intern')

const newIntern = new Intern("Jenny", "1234", "123@email", "Algonquin")
describe("Intern", () => {
    describe("test all properties", () => {
        it("test name", () => {
            expect(newIntern.name).toEqual("Jenny")
        })
        it("test ID", () => {
            expect(newIntern.id).toEqual("1234")
        })
        it("test email", () => {
            expect(newIntern.email).toEqual("123@email")
        })
        it("test school", () => {
            expect(newIntern.school).toEqual("Algonquin")
        })
    })
})