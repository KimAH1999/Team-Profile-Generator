// const created to render folder path
const inquirer = require("inquirer");
const Employee = require("./lib/employee.js");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//List of employees that are already in the system
const teamMembers = [
    new Manager(1,"Jared","jared@fakemail.com", "1"),
    new Engineer(2,"Alex","alec@fakemail.com", "ibealec"),
    new Engineer(3,"Grace","grace@fakemail.com", "gchoi2u"),
    new Engineer(4,"Tammer","tammer@fakemail.com", "tammerg"),
    new Intern(5,"john@fakemail.com","2Univeristy"),
];

async function render(employee){
    const html = []
    const [
        managerTemplate,
        engineerTemplate,
        internTemplate,
        mainTemplate,
    ]= await Promise.all([
        readFile(path.resolve(templateDir,"manager.html"),"utf8"),
        readFile(path.resolve(templateDir,"engineer.html"),"utf8"),
        readFile(path.resolve(templateDir,"intern.html"),"utf8"),
        readFile(path.resolve(templateDir,"main.html"),"utf8"),
    ])
   
    html.push(
        employer
         .filter((employee )=> employee.getRole() == 'Manager')
          .map(employee => {
              
            let template = managerTemplate;
            for (const key in employee) {
              template = replacePlaceholder(template, key, employee[key]);
            }
             
            return template;
          })
          .join("")
      );
      
      html.push(
        employer
          .filter(employee => employee.getRole()  ==  'Engineer')
          .map(employee => {
            let template = engineerTemplate;
            for (const key in employee) {
              template = replacePlaceholder(template, key, employee[key]);
            }
            return template;
          })
          .join("")
      );

      html.push(
        employer
          .filter(employee => employee.getRole()  ==  'Intern')
          .map(employee => {
            let template = internTemplate;
            for (const key in employee) {
              template = replacePlaceholder(template, key, employee[key]);
            }
            return template;
          })
          .join("")
      );
 
 
    //console.log (managerTemplate)
    await writeFile (   path.resolve(buildDir,"index.html"),replacePlaceholder(mainTemplate,"body",html))

}

//permet d'injecter les variables dans le html
 
function replacePlaceholder(template, target, value) {
    const regex = new RegExp("{{ " + target + " }}", "gm");
    const newTemplate = template.replace(regex, value);
    return newTemplate;
  };
//render(employer from this file)
module.exports = generateHTML