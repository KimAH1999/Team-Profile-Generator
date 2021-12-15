//connect this file to employee.js
const Employee = require("./lib/employee.js");

class Engineer extends Employee {
    constructor(name, id, email, github) {
      super(name, id, email);
      this.github = github;
    }

    // method getGithub() getRole() // Overridden to return 'Engineer'
    getGithub(){
        return this.github;
    }
    //override
    getRole(){
        return "Engineer";
    }
}  
module.exports = Engineer;