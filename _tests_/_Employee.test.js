

const Employee = require('../lib/Employee.js');

test('creates employee profile',()=> {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
   
});