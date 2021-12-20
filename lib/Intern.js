const Employee = require("../lib/Employee.js");

class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email);
      this.school = school;
    }
    // method getSchool() getRole()
    getSchool(){
        return this.school;
    }
    //override to intern
    getRole(){
        return "Intern";
    }
}  
module.exports = Intern;