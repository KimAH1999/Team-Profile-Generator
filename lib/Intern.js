const Employee = require("./lib/employee.js");

class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email);
      this.school = school;
    }

    // method getSchool() getRole() // Overridden to return 'Intern'
    getSchool(){
        return this.school;
    }
    //override
    getRole(){
        return "Intern";
    }
}  
module.exports = Intern;