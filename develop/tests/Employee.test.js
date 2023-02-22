const Employee = require('../lib/employee')

const newEmployee = new Employee("Jenny", "1234", "123@email")
describe("Employee", () => {
    describe("test all properties", () => {
        it("test name", () => {
            expect(newEmployee.name).toEqual("Jenny")
        })
        it("test ID", () => {
            expect(newEmployee.id).toEqual("1234")
        })
        it("test email", ()=> {
            expect(newEmployee.email).toEqual("123@email")
        })
    })
    describe("test all methods", ()=> {
        it("test getName()", ()=> {
            expect(newEmployee.getName()).toEqual("Jenny")
        })
        it("test getEmail()",()=>{
            expect(newEmployee.getEmail()).toEqual("123@email")
        })
        it("test getID()", ()=> {
            expect(newEmployee.getID()).toEqual("1234")
        })
    })

})

