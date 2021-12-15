const Employee = require("./lib/employee.js");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    //override if manager needed too
    getRole(){
        return "Manager";
    }
}  
module.exports = Manager;